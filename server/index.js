const app = require('./app');

const port = process.env.PORT || 5227;

app.listen(port, () => {
  console.log('Running on port ', port);
});
