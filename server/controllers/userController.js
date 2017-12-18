import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/User';
import Post from '../models/Post';
import config from '../config/config';

const ObjectId = mongoose.Types.ObjectId;

const userController = {};

// =======================
userController.signUp = (req, res, next) => {
  const { email, screenname, username, password } = req.body;
  const user = new User();
  user.email = email;
  user.screenName = screenname;
  user.username = username;
  user.setPassword(password);
  user
    .save()
    .then(newUser => {
      res.status(200).json({ success: true, message: '200', user: newUser });
    })
    .catch(err => next(err));
};

// =======================
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
        {
          id: user._id,
          email: user.email,
          username: user.username,
        },
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

// =======================
userController.getCurrentUser = (req, res, next) => {
  User.aggregate([
    {
      $match: { _id: ObjectId(req.user.id) },
    },
    {
      $project: {
        screenName: 1,
        username: 1,
        email: 1,
        createTime: 1,
        avatar: 1,
        posts_count: { $size: '$posts' },
        favs_count: { $size: '$favs' },
        subs_count: { $size: '$subscribers' },
        following_count: { $size: '$following' },
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

// =============================
userController.getUser = (req, res, next) => {
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

// ==================================
userController.getUserTimeline = (req, res, next) => {
  User.findById({ _id: req.user.id })
    .then(user => {
      const authorIds = user.following;
      authorIds.push(user._id);
      return Post.find({ author: { $in: authorIds } })
        .populate('author', '_id screenName username avatar createTime')
        .sort({
          createTime: 'desc',
        });
    })
    .then(posts => res.json({ posts }))
    .catch(err => {
      next(err);
    });
};

// ==================================================
userController.createPost = (req, res, next) => {
  const user = req.user;
  const text = req.body.text;

  const newPost = new Post();
  newPost.text = text;
  newPost.author = ObjectId(user.id);
  newPost
    .save()
    .then(() =>
      // ---------------- увеличить счетчик постов !
      User.findByIdAndUpdate(user.id, { $push: { posts: newPost._id } })
    )
    .then(() =>
      Post.findById(newPost._id).populate(
        'author',
        '_id screenName username avatar'
      )
    )
    .then(post => {
      console.log(post);
      res
        .status(200)
        .json({ status: '200', message: 'sending has succed', post });
    })
    .catch(err => next(err));
};

userController.getUserPosts = (req, res, next) => {
  const author = req.profile._id;
  Post.find({ author })
    .populate('author', '_id screenName username avatar')
    .limit(10)
    .then(posts => {
      res.status(200).json({ status: '200', message: 'get posts', posts });
    })
    .catch(err => next(err));
};

// ======================================================
userController.follow = (req, res, next) => {
  const profileId = req.params.profileId;
  const userId = req.user.id;

  User.findByIdAndUpdate(
    { _id: userId },
    { $addToSet: { following: profileId } }
  )
    .then(() =>
      User.findByIdAndUpdate(
        { _id: profileId },
        { $addToSet: { subscribers: userId } }
      )
    )
    .then(() => res.status(200).json({ message: 'user follow' }))
    .catch(err => next(err));
};

// =======================
userController.unfollow = (req, res, next) => {
  const profileId = req.params.profileId;
  const userId = req.user.id;

  User.findByIdAndUpdate({ _id: userId }, { $pull: { following: profileId } })
    .then(() =>
      User.findByIdAndUpdate(
        { _id: profileId },
        { $pull: { subscribers: userId } }
      )
    )
    .then(() => res.status(200).json({ message: 'user unfollow' }))
    .catch(err => next(err));
};

export default userController;
