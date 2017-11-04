import express from 'express';
import authMiddleware from '../middlewares/tokenMiddleware';
import authController from '../controllers/authController';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);

router.get('/user', authMiddleware, userController.getUser);

router.post('/post', authMiddleware, userController.doPost);
router.get('/posts', userController.getUserPosts);

export default router;
