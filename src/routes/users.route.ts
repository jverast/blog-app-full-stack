import { Router } from 'express';
import { deleteUser, getUser, getUsers } from '../controllers/user.controller';
import { verifyUserSession } from '../middlewares/session.middleware';

const router = Router();

router.get('/:id', getUser);
router.get('/', getUsers);
router.delete('/:id', verifyUserSession, deleteUser);

export { router };
