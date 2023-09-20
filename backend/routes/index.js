import express from 'express';

import authRouter from './authRoute.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import  postRouter from './post.route.js';
import commentRouter from './commentRoute.js';
const router = express.Router();

// router.use('/auth', authRouter);

router.use("/auth", authRouter)
router.use("/posts", authMiddleware,postRouter) //auth
router.use("/comment",authMiddleware,commentRouter)
// router.use("/users",userRouter )

export default router;
