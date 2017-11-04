import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const PostSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  reposts: [{ type: ObjectId, ref: 'User' }],
  likes: [{ type: ObjectId, ref: 'User' }],
  comments: [{ type: ObjectId, ref: 'Comment' }],
  createTime: { type: Date, default: Date.now },
});

export default mongoose.model('Post', PostSchema);
