import { Router } from 'express';
import { deleteUser, getUser, getUsers } from '../controllers/user.controller';

const router = Router();

router.get('/:id', getUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);

export { router };
