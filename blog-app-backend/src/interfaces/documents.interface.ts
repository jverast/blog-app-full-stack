import { Document } from 'mongoose';
import { User } from './user.interface';
import { Blog } from './blog.interface';

export type UserDocument = Document<unknown, {}, User>;
export type BlogDocument = Document<unknown, {}, Blog>;
export type Documents = UserDocument | BlogDocument;
