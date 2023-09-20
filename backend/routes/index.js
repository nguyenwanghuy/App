import express from 'express';
import authRouter from './authRoute.js';
import videoRouter from './videoRoute.js';
import postRouter from './post.route.js';

import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/video', videoRouter);

router.use('/posts', authMiddleware, postRouter); //auth
// router.use("/users",userRouter )
// router.use("/comment",commentRouter)

export default router;
