import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'GET_BLOG_ERROR');
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'GET_BLOGS_ERROR');
  }
};

const createBlog = ({ body }: Request, res: Response) => {
  try {
    res.status(201).send(body);
  } catch (e) {
    handleHttp(res, 'CREATE_BLOG_ERROR');
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'UPDATE_BLOG_ERROR');
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'DELETE_BLOG_ERROR');
  }
};

export { getBlog, getBlogs, createBlog, updateBlog, deleteBlog };
