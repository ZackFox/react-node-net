import User from '../models/User';

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
        posts_count: { $size: '$posts' },
        favs_count: { $size: '$favs' },
        subs_count: { $size: '$subscribers' },
        following_count: { $size: '$following' },
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
