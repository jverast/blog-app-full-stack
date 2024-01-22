import { Router } from 'express';
import { currentUser } from '../controllers/me.controller';
import { verifyUserSession } from '../middlewares/session.middleware';

const router = Router();

router.get('/', verifyUserSession, currentUser);

export { router };
