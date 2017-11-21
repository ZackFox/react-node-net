import mongoose from 'mongoose';

import bcrypt from 'bcrypt';

const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
  email: { type: String, lowercase: true, unique: true, required: true },
  screenName: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  posts: [{ type: ObjectId, ref: 'Post' }],
  favs: [{ type: ObjectId, ref: 'Post' }],
  subscribers: [{ type: ObjectId, ref: 'User' }],
  following: [{ type: ObjectId, ref: 'User' }],
  createTime: { type: Date, default: Date.now },
  avatar: { type: String, default: 'avatar.jpg' },
});

UserSchema.methods.isValidPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.methods.setPassword = function(password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
};

export default mongoose.model('User', UserSchema);
