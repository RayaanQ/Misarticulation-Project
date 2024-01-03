const User = require('../models/user');
const {StatusCodes} = require('http-status-codes');

const register = async(req,res) =>{
    const user = await User.create({...req.body}); 
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async(req,res) =>{ 

    const { email, password } = req.body;
    if(!email || !password){
        res.status(StatusCodes.BAD_REQUEST).send('Please provide email and password');
    }

    const user = await User.findOne({ email });
    if(!user){
        res.status(StatusCodes.UNAUTHORIZED).send('Invalid Credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        res.status(StatusCodes.UNAUTHORIZED).send('Invalid Credentials');
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

const logout = async(req,res) =>{
    try {
        res.clearCookie("jwt");
        console.log("logout successfully");
        await req.user.save();
        // res.render("login")
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
}

module.exports = {
    register,
    login,
    logout
}
  