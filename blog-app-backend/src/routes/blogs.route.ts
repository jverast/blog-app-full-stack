import { Router } from 'express';
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog
} from '../controllers/blog.controller';
import { verifyUserSession } from '../middlewares/session.middleware';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: './src/uploads/images/blog/featured' });

router.get('/:id', getBlog);
router.get('/', getBlogs);
router.post('/', verifyUserSession, upload.single('featuredImage'), createBlog);
router.put('/:id', verifyUserSession, updateBlog);
router.delete('/:id', verifyUserSession, deleteBlog);

export { router };
