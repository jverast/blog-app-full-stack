import { Types } from 'mongoose';

export interface Blog {
  title: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  tags: string | string[];
  user: Types.ObjectId;
}
