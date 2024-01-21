import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';

const get = async (id: string) => {
  const blog = await UserModel.findById(id).populate('blogs', {
    createdAt: false,
    updatedAt: false,
    user: false
  });
  return blog;
};

const getAll = async () => {
  const blogs = await UserModel.find({}).populate('blogs', {
    createdAt: false,
    updatedAt: false,
    user: false
  });
  return blogs;
};

const create = async (obj: User) => {
  const createdBlog = await UserModel.create(obj);
  return createdBlog;
};

const update = async (id: string, body: User) => {
  const updatedBlog = await UserModel.findByIdAndUpdate(id, body, {
    new: true
  });
  return updatedBlog;
};

const remove = async (id: string) => {
  await UserModel.findByIdAndDelete(id);
};

export default { create, getAll, get, update, remove };
