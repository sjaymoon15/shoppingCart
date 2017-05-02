const express = require('express');
const logger = require('morgan');

const app = express();

app.use((req, res, next) => {
  res.send('server works!');
});

app.listen(5227, () => {
  console.log('Running on port 5227');
});