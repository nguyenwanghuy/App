import express from "express";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary"
import PostController from "../controllers/PostController.js";
import uploadFile from "../configs/multer.conflig.js";
import { authMiddleware } from '../middlewares/auth.middleware.js';
import PostModel from "../models/post.model.js";


cloudinary.config({
    cloud_name: "dxsyy0ocl",
    api_key: "719715235574389",
    api_secret: 'ICZrIwcuhpQr24efU2DZ6CjAEIQ'
})

const router = express.Router();

router.use(authMiddleware)

router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getById);
router.post("/", PostController.createPost);
router.put("/:id", PostController.update);
router.delete("/:id", PostController.remove);
router.get("/search", PostController.search);
router.post("/upload-image",authMiddleware , uploadFile.single('image'), async (req, res) => {
    try {
        // const {id} = req.users;

    const file = req.file;

    // upload file to cloud 
    const result = await cloudinary.uploader.upload(file.path, {
        resource_type: "auto",
        folder: "App",
    })
     //remove temp image
     fs.unlinkSync(file.path);
     
    const imageURL = result && result.secure_url;
    // url => monggo
    const {id} = req.users;
    const user = req.users.id;
    // console.log(user)
    


    
    return res.json({
        message: "Uploading image successfully",
        data: imageURL
      
    });
    } catch (error) {
        res.status(500).send(error);
        
    }
})

export default router;