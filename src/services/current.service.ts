import UserModel from '../models/user.model';
import { CustomRequest } from '../interfaces/user.interface';

const getUser = async (req: CustomRequest) => {
  if (!('user' in req) || !req.user || typeof req.user !== 'object') {
    return null;
  }

  const user = await UserModel.findById(`${req.user.id}`);
  return user;
};

export default { getUser };
