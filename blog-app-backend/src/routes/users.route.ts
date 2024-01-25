import { Router } from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from '../controllers/user.controller';
import { verifyUserSession } from '../middlewares/session.middleware';

const router = Router();

router.get('/:id', verifyUserSession, getUser);
router.get('/', verifyUserSession, getUsers);
router.put('/:id', verifyUserSession, updateUser);
router.delete('/:id', verifyUserSession, deleteUser);

export { router };
