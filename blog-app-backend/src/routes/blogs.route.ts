import { Router } from 'express';
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog
} from '../controllers/blog.controller';
import { verifyUserSession } from '../middlewares/session.middleware';

const router = Router();

router.get('/:id', getBlog);
router.get('/', getBlogs);
router.post('/', verifyUserSession, createBlog);
router.put('/:id', verifyUserSession, updateBlog);
router.delete('/:id', verifyUserSession, deleteBlog);

export { router };
