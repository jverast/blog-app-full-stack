import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

export type RequestUser = string | JwtPayload | undefined;
