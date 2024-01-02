require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const connectDB = require('./db/connect');

//routers
const authRouter = require('./routes/auth');

app.use(express.json());


app.get('/api/v1', (req, res) => {
    res.send('<h1>SIH</h1>');
});

//routes
app.use('/api/v1', authRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();