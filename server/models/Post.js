import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const PostSchema = new mongoose.Schema({
  author: { type: ObjectId, ref: 'User' },
  text: { type: String, required: true },
  reposts: [{ type: ObjectId, ref: 'User' }],
  likes: [{ type: ObjectId, ref: 'User' }],
  comments: [{ type: ObjectId, ref: 'Comment' }],
  createTime: { type: Date, default: Date.now },
});

export default mongoose.model('Post', PostSchema);
