import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
      comment: {
        type: String,
        required: true,
        
      },
      post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts"
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
      },
},{timestamps: true});

const CommentModel = mongoose.model("comments", CommentSchema);
export default CommentModel;