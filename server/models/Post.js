import { Schema, model } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const PostSchema = new Schema({
  test: { type: String, required: true },
  author: { type: ObjectId, ref: 'User' },
  reposts: [{ type: ObjectId, ref: 'User' }],
  likes: [{ type: ObjectId, ref: 'User' }],
  comments: [{ type: ObjectId, ref: 'Comment' }],
  createTime: { type: Date, default: Date.now },
});

export default model('Post', PostSchema);
