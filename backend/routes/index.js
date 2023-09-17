import express from 'express';

import authRouter from './authRoute.js';
import videoRouter from './videoRoute.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/video', videoRouter);

export default router;
