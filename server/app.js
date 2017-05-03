const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());

routes(app);

app.use((err, req, res) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
