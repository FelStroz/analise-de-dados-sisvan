const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');

//import routes
dotenv.config();

//see the routes used
app.use(morgan('dev'));

//connect to db
// mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, () =>
//   console.log('Connected to db')
// );

//routes
const extractData = require('./routes/extractData');

//Middleware
app.use(express.json());

//route middleware
app.use('/', extractData);

module.exports = app;
