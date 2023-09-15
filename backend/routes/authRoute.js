import express from 'express';
import { validationMiddleware } from '../middlewares/validationMiddleware.js';
import { loginSchema } from '../validations/loginValidation.js';
import { registerSchema } from '../validations/registerValidation.js';
import AuthController from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', validationMiddleware(loginSchema), AuthController.login);

router.post(
  '/register',
  validationMiddleware(registerSchema),
  AuthController.register,
);
router.get('/me', authMiddleware, AuthController.getMe);

export default router;

// maintain
// scale up
