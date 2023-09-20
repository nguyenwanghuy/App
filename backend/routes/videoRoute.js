import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import videoController from '../controllers/videoController.js';
import upload from '../configs/multer.conflig.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', videoController.getAll);
router.post('/add', videoController.addVideo);
router.post(
  '/upload-video',
  upload.single('video'),
  videoController.uploadVideo,
);
router.delete('/:id', videoController.deleteVideo);
router.get('/find/:id', videoController.getVideo);
router.get('/search', videoController.searchVideo);

export default router;
