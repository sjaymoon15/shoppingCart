const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes.js');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/shoppingCart');
mongoose.connection.once('connected', () => {
  console.log('Connect to database');
});

app.use(logger('dev'));
app.use(cors());

routes(app);

app.use((err, req, res) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
