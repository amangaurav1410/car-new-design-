import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  publicationDate: { type: Date, default: Date.now },
  images: [{ type: String }],
  tags: [{ type: String }],
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);