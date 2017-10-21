import jwt from 'jsonwebtoken';
import config from '../config/config';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(' ')[1] : null;

  if (token) {
    const userData = jwt.verify(token, config.secretKey);
    req.userId = userData.id;
    next();
  } else {
    res.status(401).json({ msg: 'error' });
  }
};
