import { model, Types, Schema, Model } from 'mongoose';
import { Blog } from '../interfaces/blog.interface';

const blogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    tags: { type: [String] }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default model('Blog', blogSchema);
