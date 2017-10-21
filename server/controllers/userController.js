import jwt from 'jsonwebtoken';
import User from '../models/User';
import passport from '../config/passport';

const userController = {};

userController.getUser = (req, res, next) => {
  console.log(req.userId);
  res.json({ user: { username: 'test' } });
};

export default userController;
