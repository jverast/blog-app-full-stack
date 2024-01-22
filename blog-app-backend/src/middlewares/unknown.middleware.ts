import { NextFunction, Request, Response } from 'express';

const unknownEnpoint = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ error: 'UNKNOWN_ENDPOINT_ERROR' });
  next();
};

export { unknownEnpoint };
