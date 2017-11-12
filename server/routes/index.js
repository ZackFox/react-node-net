import express from 'express';
import userController from '../controllers/userController';
import profileController from '../controllers/profileController';

import authMiddleware from '../middlewares/tokenMiddleware';
import checkProfile from '../middlewares/checkProfileMiddleware';

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);

router.get('/user', authMiddleware, userController.getUser);
router.post('/post', authMiddleware, userController.doPost);

// router.get('/posts', userController.getUserPosts);
router.get('/profile', checkProfile, profileController.getUserProfile);

export default router;
