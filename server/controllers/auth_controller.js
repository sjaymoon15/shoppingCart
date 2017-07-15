const User = require('../models/User');

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
  .then((existingUser) => {
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use"});
    }
    User.create({ email, password })
    .then(createdUser => res.send(createdUser))
    .catch(next);
  })
  .catch(next);
};

