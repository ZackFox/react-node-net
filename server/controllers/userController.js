import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/User';
import config from '../config/config';

const ObjectId = mongoose.Types.ObjectId;

const userController = {};

userController.signUp = (req, res, next) => {
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

userController.signIn = (req, res) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.status(401).json({ message: 'Email и пароль должны быть заполнены' });
    return;
  }

  User.aggregate(
    { $match: { email } },
    { $project: { email: 1, passwordHash: 1, username: 1 } }
  )
    .then(result => {
      const user = result[0];
      if (!bcrypt.compareSync(password, user.passwordHash)) {
        res.status(403).json({ message: 'Пароль неверный' });
        return;
      }
      const token = jwt.sign(
        { id: user._id, email: user.email, username: user.username },
        config.secretKey,
        {
          expiresIn: 10000,
        }
      );

      res
        .status(200)
        .json({ message: 'authentication has succeed', token, user });
    })
    .catch(() =>
      res.status(401).json({ message: 'Учетная запись не найдена' })
    );
};

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

export default userController;
