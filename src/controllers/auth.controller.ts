import { Request, Response } from 'express';
import { Auth } from '../interfaces/auth.interface';
import authService from '../services/auth.service';
import { handleHttp } from '../utils/error.handle';

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

const login = (auth: Auth) => {};

export { register, login };
