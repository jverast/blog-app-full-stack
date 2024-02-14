import 'dotenv/config';
import { sign, verify } from 'jsonwebtoken';

const SECRET_KEY = <string>process.env.SECRET_KEY;

const generateToken = (id: string) => {
  const userForToken = { id };
  return sign(userForToken, SECRET_KEY, { expiresIn: '24h' });
};

const verifyToken = (token: string) => {
  return verify(token, SECRET_KEY);
};

export { generateToken, verifyToken };
