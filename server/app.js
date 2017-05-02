const express = require('express');
const logger = require('morgan');
const routes = require('./routes/routes.js');

const app = express();

app.use(logger('dev'));

routes(app);

app.use((err, erq, res) => {
  res.status(422).send({ error: err.message });
})
module.exports = app;