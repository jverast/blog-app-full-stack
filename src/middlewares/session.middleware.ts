import { NextFunction, Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { verifyToken } from '../utils/jwt.handle';
import { CustomRequest } from '../interfaces/request.interface';

const verifyUserSession = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.get('authorization');
    if (!authorization) {
      return res.status(401).send({ error: 'NO_TOKEN_ERROR' });
    }

    const token = authorization.replace(/Bearer /, '');
    const isTokenValid = verifyToken(token);

    if (!isTokenValid) {
      return res.status(401).send({ error: 'INVALID_TOKEN_ERROR' });
    }

    req.user = isTokenValid;

    next();
  } catch (e) {
    handleHttp(res, 'NO_VALID_SESSION', e);
  }
};

export { verifyUserSession };
