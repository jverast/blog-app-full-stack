import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import { comparePassword, encryptPassword } from '../utils/user.util';

const register = async (obj: User) => {
  const isUser = await UserModel.findOne({ email: obj.email });

  if (isUser) {
    return null;
  }

  const password = await encryptPassword(obj.password);
  const user = { ...obj, password };

  const registeredUser = await UserModel.create(user);
  return registeredUser;
};

const login = async ({ email, password }: Auth) => {
  const isUser = await UserModel.findOne({ email });

  if (!isUser || !(await comparePassword(password, isUser.password))) {
    return null;
  }

  return isUser;
};

export default { register, login };
