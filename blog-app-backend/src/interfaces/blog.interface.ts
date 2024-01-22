import { Types, Document } from 'mongoose';

export interface Blog {
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  user: Types.ObjectId;
}
