import express from 'express';
import postRouter from "./post.route.js"
import userRouter from "./user.route.js"
import commentRouter from "./comment.route.js"
import logAPI from '../middlewares/logAPI.js';
import authRouter from '../routes/auth.roure.js'
import { authMiddleware } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.use(logAPI)

router.use("/auth", authRouter)
router.use("/posts", authMiddleware,postRouter) //auth
router.use("/users",userRouter )
router.use("/comment",commentRouter)

export default router;