import UserModel from "../models/user.model.js";

export  const userCtrl = {
    searchUser: async (req, res) => {  
        try {
            const fullname = req.query.fullname || ''
            const users = await UserModel.find({fullname: {"$regex":fullname} })
            return res.send({users})
        } catch (error) {   
            return res.status(500).json({
                message: error.message
            })
        }
    }
}

