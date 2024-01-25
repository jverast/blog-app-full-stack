import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';

const get = async (id: string) => {
  const user = await UserModel.findById(id);
  return user;
};

const getAll = async () => {
  const users = await UserModel.find({});
  return users;
};

const update = async (id: string, body: User) => {
  const updatedUser = await UserModel.findByIdAndUpdate(id, body, {
    new: true
  });
  return updatedUser;
};

const remove = async (id: string) => {
  await UserModel.findByIdAndDelete(id);
};

export default { getAll, get, update, remove };
