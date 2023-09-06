import mongoose, { Schema } from "mongoose";

const MessageSchma = new mongoose.Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    text: {
        type: String,
        maxLength: 1000
    },
    type: { 
        type: String, 
        required: true, 
        default: "text" 
    },
    userDeletedMessage: {
        type: Map,
        default: new Map()
    },
    time :{
        type: Date,
        default: Date.now()
    }

})
const MessageModel = mongoose.model("Message",MessageSchma)
export default MessageModel