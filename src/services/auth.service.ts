import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import bcrypt from 'bcrypt';

const register = async (obj: User) => {
  const isUser = await UserModel.findOne({ username: obj.username });

  if (isUser) {
    return null;
  }

  const password = await bcrypt.hash(obj.password, 10);
  const user = { ...obj, password };

  const registeredUser = UserModel.create(user);
  return registeredUser;
};

const login = async (auth: Auth) => {};

export default { register, login };
