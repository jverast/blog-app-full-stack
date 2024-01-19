import { Router } from 'express';
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog
} from '../controllers/blog.controller';

const router = Router();

router.get('/:id', getBlog);
router.get('/', getBlogs);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export { router };
