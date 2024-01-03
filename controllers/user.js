const User = require('../models/user');
const { StatusCodes } = require('http-status-codes');

const getAllUsers = async (req, res) => {
    console.log(req.user);
    try {
        const users = await User.find({}).select('-password');
        res.status(StatusCodes.OK).json({ users });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json('Error: ' + error);
    }
};

const getSingleUser = async (req, res) => {
    try {     
    const user = await User.findOne({ _id: req.params.id }).select('-password');
    if (!user) {
        res.status(StatusCodes.NOT_FOUND).json(`No user with id : ${req.params.id}`);
    }
    res.status(StatusCodes.OK).json({ user });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json('Error: ' + error);
    }
};

module.exports = {getAllUsers,getSingleUser};