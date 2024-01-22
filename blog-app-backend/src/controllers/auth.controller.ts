import { Request, Response } from 'express';
import authService from '../services/auth.service';
import { handleHttp } from '../utils/error.handle';
import { generateToken } from '../utils/jwt.handle';

const register = async ({ body }: Request, res: Response) => {
  try {
    const user = await authService.register(body);

    if (!user) {
      return res.status(409).send({ error: 'USER_ALREADY_REGISTERED' });
    }

    return res.status(201).send(user);
  } catch (e) {
    handleHttp(res, 'REGISTER_ERROR', e);
  }
};

const login = async ({ body }: Request, res: Response) => {
  try {
    const user = await authService.login(body);

    if (!user) {
      return res.status(401).send({ error: 'INVALID_CREDENTIALS' });
    }

    const token = generateToken(user._id.toString());
    return res.send({ token });
  } catch (e) {
    handleHttp(res, 'LOGIN_ERROR', e);
  }
};

export { register, login };
