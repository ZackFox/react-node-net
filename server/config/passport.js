import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User';
import config from '../config/config';

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = config.secretKey;

passport.use(
  'jwt',
  new JwtStrategy(options, (payload, done) => {
    User.aggregate({ $match: { _id: payload.id } })
      .then(result => {
        const user = result[0];
        done(null, user);
      })
      .catch(err => done(err, false, { message: ' !!!!!' }));
  })
);

export default passport;
