import jwt from 'jsonwebtoken';
import config from '../config/config';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(' ')[1] : null;

  if (token) {
    let userData;
    try {
      userData = jwt.verify(token, config.secretKey);
      req.user = {
        id: userData.id,
        username: userData.username,
        email: userData.email,
      };
      next();
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  } else {
    res.status(401).json({ message: 'token is empty' });
  }
};
