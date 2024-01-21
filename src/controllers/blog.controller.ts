import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import blogService from '../services/blog.service';
import { CustomRequest } from '../interfaces/user.interface';

const getBlog = async ({ params: { id } }: Request, res: Response) => {
  try {
    const blog = await blogService.get(id);
    if (!blog) {
      return res.status(404).send({ error: 'NOT_FOUND' });
    }
    return res.send(blog);
  } catch (e) {
    handleHttp(res, 'GET_BLOG_ERROR');
  }
};

const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await blogService.getAll();
    return res.send(blogs);
  } catch (e) {
    handleHttp(res, 'GET_BLOGS_ERROR');
  }
};

const createBlog = async ({ body }: CustomRequest, res: Response) => {
  try {
    const blog = await blogService.create(body);
    return res.status(201).send(blog);
  } catch (e) {
    handleHttp(res, 'CREATE_BLOG_ERROR', e);
  }
};

const updateBlog = async (
  { body, params: { id } }: CustomRequest,
  res: Response
) => {
  try {
    const blog = await blogService.update(id, body);
    return res.send(blog);
  } catch (e) {
    handleHttp(res, 'UPDATE_BLOG_ERROR');
  }
};

const deleteBlog = async ({ params: { id } }: CustomRequest, res: Response) => {
  try {
    await blogService.remove(id);
    return res.status(204).send();
  } catch (e) {
    handleHttp(res, 'DELETE_BLOG_ERROR');
  }
};

export { getBlog, getBlogs, createBlog, updateBlog, deleteBlog };
