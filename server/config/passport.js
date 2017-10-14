import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User';
import config from '../config/config';

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = config.secretKey;

passport.use(
  new JwtStrategy(options, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload.id })
      .then(user => done(null, user))
      .catch(err => done(err, false, { message: ' !!!!!' }));
  })
);

export default passport;
