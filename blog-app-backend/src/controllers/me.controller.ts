import { Response } from 'express';
import { CustomRequest } from '../interfaces/request.interface';
import currentService from '../services/current.service';
import { handleHttp } from '../utils/error.handle';

const currentUser = async (req: CustomRequest, res: Response) => {
  try {
    const current = await currentService.getUser(req);
    return res.send(current);
  } catch (e) {
    handleHttp(res, 'CURRENT_USER_ERROR', e);
  }
};

export { currentUser };
