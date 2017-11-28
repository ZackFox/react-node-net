import express from 'express';
import userController from '../controllers/userController';

import authMiddleware from '../middlewares/tokenMiddleware';
import checkProfile from '../middlewares/checkProfileMiddleware';

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);

router.get('/user', authMiddleware, userController.getCurrentUser);
router.get('/profile', checkProfile, userController.getUser);

router.get('/timeline', authMiddleware, userController.getUserTimeline);
router.get('/posts', checkProfile, userController.getUserPosts);
router.post('/post', authMiddleware, userController.createPost);

router.post('/follow/:profileId', authMiddleware, userController.follow);
router.put('/follow/:profileId', authMiddleware, userController.unfollow);

export default router;
