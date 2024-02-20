import { Response } from 'express';

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  return res.status(500).send({ error });
};

export { handleHttp };
