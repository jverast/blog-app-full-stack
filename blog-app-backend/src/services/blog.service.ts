import { Blog } from '../interfaces/blog.interface';
import UserModel from '../models/user.model';
import BlogModel from '../models/blog.model';
import { RequestUser } from '../interfaces/request.interface';
import { isUserDocument } from '../utils/user.narrow';

const get = async (id: string) => {
  const blog = await BlogModel.findById(id).populate('user', {
    createdAt: false,
    updatedAt: false,
    blogs: false
  });
  return blog;
};

const getAll = async () => {
  const blogs = await BlogModel.find({}).populate('user', {
    createdAt: false,
    updatedAt: false,
    blogs: false
  });
  return blogs;
};

const create = async (obj: Blog, user: RequestUser) => {
  if (!isUserDocument(user)) {
    return null;
  }

  const blogToCreate = { ...obj, user: user.id };
  const createdBlog = await BlogModel.create(blogToCreate);

  const userToUpdate = await UserModel.findById(user.id);

  if (!userToUpdate) {
    return null;
  }

  userToUpdate.blogs = userToUpdate.blogs
    ? userToUpdate.blogs.concat(createdBlog.id)
    : [];
  await userToUpdate.save();

  return createdBlog;
};

const update = async (id: string, body: Blog) => {
  const updatedBlog = await BlogModel.findByIdAndUpdate(id, body, {
    new: true
  });
  return updatedBlog;
};

const remove = async (id: string) => {
  await BlogModel.findByIdAndDelete(id);
};

export default { create, getAll, get, update, remove };
