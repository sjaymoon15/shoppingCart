const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use((req, res, next) => {
  res.send('server works!');
});

module.exports = app;