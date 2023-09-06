import express from "express";
import {userCtrl} from "../controllers/UserController.js";
import { authMiddleware } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.get('/',authMiddleware,userCtrl.searchUser );

export default router;