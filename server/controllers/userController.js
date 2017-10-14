import User from '../models/User';

const userController = {};

userController.getUsers = (req, res, next) => {
  res.json({ users: 'none' });
};

export default userController;
