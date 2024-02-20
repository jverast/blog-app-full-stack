import 'dotenv/config';

import { hash, compare } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';

import { RequestUser } from '../interfaces/request.interface';
import { UserDocument } from '../interfaces/documents.interface';

const SECRET_KEY = <string>process.env.SECRET_KEY;

const encryptPassword = async (password: string) => {
  const saltRounds = 10;
  return await hash(password, saltRounds);
};

const comparePassword = async (password: string, hashedPassword: string) => {
  return await compare(password, hashedPassword);
};

const generateToken = (id: string) => {
  const userForToken = { id };
  return sign(userForToken, SECRET_KEY, { expiresIn: '24h' });
};

const verifyToken = (token: string) => {
  return verify(token, SECRET_KEY);
};

const isUserDocument = (user: RequestUser): user is UserDocument => {
  return Boolean(user && typeof user === 'object');
};

export {
  encryptPassword,
  comparePassword,
  generateToken,
  verifyToken,
  isUserDocument
};
