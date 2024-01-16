const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./routes/userRouters');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoConnect = async () => {
    try {
        await mongoose.connect(
            // WINDOWS 
            process.env.MONGO_URL
        )
        console.log(`Successfull connection, check port: ${process.env.PORT}`)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

app.use('/users', userRouter);
mongoConnect();

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})

//module.exports = app;
