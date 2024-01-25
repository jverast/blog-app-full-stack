import { Router } from 'express';
import { login, register } from '../controllers/auth.controller';
import { validateRegisterAuth } from '../middlewares/validations.middleware';

const router = Router();

router.post('/register', validateRegisterAuth, register);
router.post('/login', login);

export { router };
