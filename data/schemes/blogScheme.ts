import { Schema, model, models } from 'mongoose';
import { BlogType } from '../types';

const BlogSchema = new Schema<BlogType>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = models.Blog || model<BlogType>('Blog', BlogSchema);

export default Blog;
