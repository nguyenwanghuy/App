import express from "express";
import CommentModel from "../models/comment.model.js";
import UserModel from "../models/userModel.js";
import PostModel from "../models/post.model.js";

//get all  comment by id
const getAllComment = async (req,res) => {
  
    const comments = await CommentModel.find()
    res.json({
        data:comments,
        messages:" Get all comments"
    })
}

// get by id post
//    const getByid = (req,res) => {
//         const {post} = req.body
//         console.log(post)
//    }

//create comment
const createComment = async (req,res) => {
    
   try {
    const {comment} = req.body
    const {id} = req.user;
    // console.log(id)
    const currentUser = await UserModel.findById(id);
    if (!currentUser) {
        res.status = 400;
        throw new Error("User not found");
      }

      const newComment = new CommentModel({
          comment ,
          user :id,
                
        });
   await newComment.save();
   res.status(201).json({
    data: newComment,
    message: "Comment created"
   })
   } catch (error) {
    res.status(500).json({
        message: "Error creating comment"
    })
   }
}
//delete comment
const deleteComment = async (req,res) =>{
    try {
        const commentId = req.params.id;
        const {id} = req.user;
        const existingComment = await CommentModel.findByIdAndDelete(commentId);
        return res.json({
            message: "Comment deleted",
            data: existingComment
        })
    } catch (error) {
        res.status(400).json({
            message: "Error deleting"
          })
    }
}
   

const CommentController = {
    getAllComment,
    createComment,
    deleteComment
}

export default CommentController;