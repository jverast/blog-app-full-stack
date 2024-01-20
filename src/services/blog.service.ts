import { Blog } from '../interfaces/blog.interface';
import BlogModel from '../models/blog.model';

const get = async (id: string) => {
  const blog = await BlogModel.findById(id);
  return blog;
};

const getAll = async () => {
  const blogs = await BlogModel.find({});
  return blogs;
};

const create = async (obj: Blog) => {
  const createdBlog = await BlogModel.create(obj);
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
