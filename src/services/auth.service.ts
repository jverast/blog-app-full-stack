import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import { comparePassword, encryptPassword } from '../utils/encrypt.handle';

const register = async (obj: User) => {
  const isUser = await UserModel.findOne({ username: obj.username });

  if (isUser) {
    return null;
  }

  const password = await encryptPassword(obj.password);
  const user = { ...obj, password };

  const registeredUser = UserModel.create(user);
  return registeredUser;
};

const login = async ({ username, password }: Auth) => {
  const isUser = await UserModel.findOne({ username });

  if (!isUser || !(await comparePassword(password, isUser.password))) {
    return null;
  }

  return isUser;
};

export default { register, login };
