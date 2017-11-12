import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from '../config/config';

import User from '../models/User';
import Post from '../models/Post';

const ObjectId = mongoose.Types.ObjectId;

const userController = {};

userController.getUserPosts = (req, res, next) => {
  const author = req.query.profileName;
  Post.find({ author })
    .limit(10)
    .then(posts => {
      res.status(200).json({ status: '200', message: 'get posts', posts });
    })
    .catch(err => next(err));
};

userController.getUserProfile = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(' ')[1] : null;

  if (!token) {
    return res.status(200).json({ ...req.profile, isFollowing: false });
  }

  const currentUser = jwt.decode(token, config.secretKey);
  const profileId = req.profile._id;
  return User.findOne({
    $and: [{ _id: currentUser.id }, { following: { $in: [profileId] } }],
  }).then(user => {
    if (user) {
      return res.status(200).json({ ...req.profile, isFollowing: true });
    }
    return res.status(200).json({ ...req.profile, isFollowing: false });
  });
};

export default userController;
