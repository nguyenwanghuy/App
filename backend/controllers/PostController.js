import asyncHandler  from 'express-async-handler'
import PostModel from "../models/post.model.js";
import UserModel from "../models/userModel.js";
import { text } from 'express';

//get all  posts by id
const getAllPosts = async (req, res) => {
   
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;

    const posts = await PostModel.find().sort({createdAt:-1}).skip(skip).limit(size);
    const totalPosts = await PostModel.countDocuments();
    const totalPages = Math.ceil(totalPosts /size);

    res.json({
        data: posts,
        pagination: {
          currentPage: page,
          pageSize: size,
          totalCounts: totalPosts,
          totalPages,
        }
      });
}
//get post by id
const getById = async (req, res) => {
  try {
    const {id} = req.user;
    const posts = await PostModel.find({user: id})
    res.json({
        data: posts,
      });
  } catch (error) {
    res.status(404).send({
      message: error.message
    })
  }
}
// create a new post
const createPost = async(req,res) => {
    const { title, content,image } = req.body;
    // const userId = req.user.id;
    const {id} = req.user;
    const currentUser = await UserModel.findById(id);
    if (!currentUser) {
        res.status = 400;
        throw new Error("User not found");
      }
    const newPost = new PostModel ({
        title,
        content,
        image,
        user:id
    })
    
    console.log(newPost._id)
    //save the new post
    await newPost.save();
    res.status(201).json({
        data: newPost,
        message: "Create new post successfully",
      });
}
//update the post  
    const update = async(req,res)=> {
      const {id} = req.users;
        const newPost = new PostModel ({
            title,
            content,
            image
        })
        const existingPostIndex = PostModel.findIndex((post) => post.id === id);
        if (existingPostIndex === -1) {
            return res.json({
              message: "Resource is not exist",
            });
          }
          const updatedPost = {
            ...PostModel[existingPostIndex],
            ...newPost,
          };
          PostModel[existingPostIndex] = updatedPost;
          return res.json({
            message: "Update successfully",
          });
    }
//remove the post
    const remove = async (req, res) => {
      try {
        const postId = req.params.id;
        const {id} = req.user;
       
        // console.log(postId,'postid')
        // console.log('hello' ,id)
          const existingPost = await PostModel.findByIdAndDelete(postId);
          console.log(existingPost)
          return res.json({
            message: "Delete successfully",
            data: existingPost
          })
      } catch (error) {
        res.status(400).json({
          message: "Error while deleting"
        })
      }
    };
//search title
    const search = async (req, res) => {
      try {
        const title = req.query.title || ''
        const text = await PostModel.find({title: {"$regex": title}})
          return res.send({text})
      } catch (error) {
        return res.status(500).json({
          message: error.message
      })
      }
    }
   
const PostController = {
    getAllPosts,
    getById,
    createPost,
    update,
    remove,
    search
};
export default PostController;