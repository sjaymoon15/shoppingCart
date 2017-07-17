const jwt = require('jwt-simple');
const User = require('../models/User');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
  .then((existingUser) => {
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }
    User.create({ email, password })
    .then(createdUser => res.json({ token: tokenForUser(createdUser) }))
    .catch(next);
  })
  .catch(next);
};

