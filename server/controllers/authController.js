import User from '../models/User';
import jwt from 'jsonwebtoken';
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
    return res
      .status(401)
      .json({ message: "Email and password can't be blank" });
  }

  User.findOne({ email })
    .then(user => {
      if (!user.isValidPassword(password)) {
        return res.status(403).json({ message: 'password is wrong' });
      }

      const token = jwt.sign(
        { id: user._id, email: user.email },
        config.secretKey,
        {
          expiresIn: 10000,
        }
      );

      return res
        .status(200)
        .json({ message: 'authentication has succeed', token });
    })
    .catch(() => res.status(401).json({ message: 'user not found' }));
};

export default authController;
