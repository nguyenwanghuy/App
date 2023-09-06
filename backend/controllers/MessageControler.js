import  MessageModel from '../models/message.model.js'
import UserModel from '../models/user.model.js'

const checkMessage = (arr,id) => {
    const check = []
    arr.forEach((msg)=> {
        if(msg.userDeletedMessage) {
            const checkMsg = msg.userDeletedMessage.has(id)
            if(!checkMsg) 
            check.push(msg)
        }
    })
    return check;
}