import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.util';
import blogService from '../services/blog.service';
import { CustomRequest } from '../interfaces/request.interface';

const getBlog = async ({ params: { id } }: Request, res: Response) => {
  try {
    const blog = await blogService.get(id);
    if (!blog) {
      return res.status(404).send({ error: 'NO_BLOG_FOUND_ERROR' });
    }
    return res.send(blog);
  } catch (e) {
    handleHttp(res, 'GET_BLOG_ERROR');
  }
};

const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await blogService.getAll(req);
    return res.send(blogs);
  } catch (e) {
    handleHttp(res, 'GET_BLOGS_ERROR');
  }
};

const createBlog = async (req: CustomRequest, res: Response) => {
  try {
    const blog = await blogService.create(req.body, req.file, req.user);

    if (!blog) {
      return res.status(404).send({ error: 'REQUEST_USER_NOT_FOUND' });
    }

    return res.status(201).send(blog);
  } catch (e: unknown) {
    if (e instanceof Error) {
      if (e.message === 'INVALID_USER_REQUEST') {
        return res.status(400).send({ error: e.message });
      }
    }

    handleHttp(res, 'CREATE_BLOG_ERROR', e);
  }
};

const updateBlog = async (req: CustomRequest, res: Response) => {
  try {
    const blog = await blogService.update(req.params.id, req.body);
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
