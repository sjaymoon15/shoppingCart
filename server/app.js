const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');

const app = express();

mongoose.connect('mongodb://localhost/shoppingCart');
mongoose.connection.once('connected', () => {
  console.log('Connect to database');
})

app.use(logger('dev'));

routes(app);

app.use((err, erq, res) => {
  res.status(422).send({ error: err.message });
})
module.exports = app;