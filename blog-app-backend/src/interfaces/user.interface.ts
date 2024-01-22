import { Auth } from './auth.interface';
import { Blog } from './blog.interface';

export interface User extends Auth {
  name: string;
  email: string;
  blogs: Blog[];
  description?: string;
}
