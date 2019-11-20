const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// const uri = "mongodb+srv://wangyan6783:Linda1989@cluster0-ltanq.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const smoothiesRouter = require('./routes/smoothies');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');

app.use('/smoothies', smoothiesRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})