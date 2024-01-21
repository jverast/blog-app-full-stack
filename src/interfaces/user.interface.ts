import { JwtPayload } from 'jsonwebtoken';
import { Auth } from './auth.interface';
import { Request } from 'express';

export interface User extends Auth {
  name: string;
  email: string;
  description?: string;
}

export interface CustomRequest extends Request {
  user?: string | JwtPayload;
}
