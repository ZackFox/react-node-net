import { Schema, model } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const CommentSchema = new Schema({
  test: { type: String, required: true },
  author: { type: ObjectId, ref: 'User' },
  post: { type: ObjectId, ref: 'Post' },
  createTime: { type: Date, default: Date.now },
});

export default model('Comment', CommentSchema);
