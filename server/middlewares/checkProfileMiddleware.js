import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config/config';

export default (req, res, next) => {
  const username = req.query.profileName;
  User.aggregate([
    {
      $match: { username },
    },
    {
      $project: {
        username: 1,
        email: 1,
        createTime: 1,
        avatar: 1,
        posts: { $size: '$posts' },
        favs: { $size: '$favs' },
        subscribers: { $size: '$subscribers' },
        following: { $size: '$following' },
      },
    },
  ])
    .then(data => {
      const user = data[0];
      if (user) {
        req.profile = user;
        next();
      } else res.status(403).json({ message: 'user not exist' });
    })
    .catch(err => next(err));
};
