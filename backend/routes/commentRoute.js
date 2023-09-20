import express from 'express';
import CommentController from '../controllers/CommentController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authMiddleware)

router.get('/', CommentController.getAllComment);
router.post('/', CommentController.createComment);
router.delete('/:id', CommentController.deleteComment)
export default router