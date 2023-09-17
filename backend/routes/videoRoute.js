import express from 'express';
import {
  deleteVideo,
  getVideo,
  uploadVideo,
} from '../controllers/videoController.js';
import uploadFile from '../configs/multer.config.js';

const router = express.Router();

router.post('/upload', uploadFile.single('video'), uploadVideo);
router.delete('/:id', deleteVideo);
router.get('/find/:id', getVideo);

export default router;
