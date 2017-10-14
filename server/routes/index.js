import express from 'express';
import authController from '../controllers/authController';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);

// router.get('/users', userController.getUsers);

export default router;
