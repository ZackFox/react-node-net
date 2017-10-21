import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/User';
import config from '../config/config';

const authController = {};

authController.signUp = (req, res, next) => {
  const { email, username, password } = req.body;
  const user = new User();
  user.email = email;
  user.username = username;
  user.setPassword(password);
  user
    .save()
    .then(newUser => {
      res.status(200).json({ success: true, message: '200', user: newUser });
    })
    .catch(err => next(err));
};

authController.signIn = (req, res) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.status(401).json({ message: "Email and password can't be blank" });
    return;
  }

  User.aggregate(
    { $match: { email } },
    { $project: { email: 1, passwordHash: 1 } }
  )
    .then(result => {
      const user = result[0];
      if (!bcrypt.compareSync(password, user.passwordHash)) {
        res.status(403).json({ message: 'password is wrong' });
        return;
      }
      const token = jwt.sign(
        { id: user._id, email: user.email },
        config.secretKey,
        {
          expiresIn: 10000,
        }
      );

      res
        .status(200)
        .json({ message: 'authentication has succeed', token, user });
    })
    .catch(() => res.status(401).json({ message: 'user not found' }));
};

export default authController;
