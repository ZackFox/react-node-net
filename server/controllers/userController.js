import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import User from '../models/User';
import Post from '../models/Post';

const ObjectId = mongoose.Types.ObjectId;

const userController = {};

userController.getUser = (req, res, next) => {
  User.aggregate([
    {
      $match: { _id: ObjectId(req.user.id) },
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
      res.json({ user });
    })
    .catch(err => {
      next(err);
    });
};

userController.doPost = (req, res, next) => {
  const text = req.body.text;

  const newPost = new Post();
  newPost.text = text;
  newPost.author = req.user.username;

  newPost
    .save()
    .then(() =>
      User.findOneAndUpdate(
        { username: req.user.username },
        { $push: { posts: newPost._id } }
      )
    )
    .then(() => {
      res.status(200).json({ status: '200', message: 'sending has succeed' });
    })
    .catch(err => next(err));
};

userController.getUserPosts = (req, res, next) => {
  const author = req.query.profileName;
  Post.find({ author })
    .limit(10)
    .then(posts => {
      res.status(200).json({ status: '200', message: 'get posts', posts });
    })
    .catch(err => next(err));
};

export default userController;
