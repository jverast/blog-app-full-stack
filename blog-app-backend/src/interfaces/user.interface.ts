import { Auth } from './auth.interface';
import { Blog } from './blog.interface';

export interface User extends Auth {
  username: string;
  name?: string;
  blogs?: Blog[];
  description?: string;
}
