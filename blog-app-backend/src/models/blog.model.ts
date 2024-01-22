import { model, Types, Schema, Model } from 'mongoose';
import { Blog } from '../interfaces/blog.interface';

const blogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    tags: { type: [String] },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

blogSchema.set('toJSON', {
  transform(document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
  }
});

export default model('Blog', blogSchema);
