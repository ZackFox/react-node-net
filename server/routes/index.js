import express from 'express';
import authController from '../controllers/authController';
import userController from '../controllers/userController';
import authMiddleware from '../middlewares/tokenMiddleware';

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);

router.get('/user', authMiddleware, userController.getUser);

export default router;
