import express from "express";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

//api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    //    Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Missing required keys",
      });
    }

    //    Check authentication
    const existingUser = await UserModel.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({
        message: "Invalid credentials!",
      });
    }

    //  Check password
    const isMatchPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isMatchPassword) {
      return res.status(401).json({
        message: "Invalid credentials!",
      });
    }

    // Create JWT Token & Response to client
    const jwtPayload = {
      email: existingUser.email,
      id: existingUser.id,
      fullname: existingUser.fullname,
    };

    const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({
      accessToken: token,
      message: "Login successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/register", async (req, res) => {
  const { email, fullname, password } = req.body;

  try {
    //  Validation
    if (!email || !fullname || !password) {
      return res.status(400).json({
        message: "Missing required keys",
      });
    }

    // Check user exist
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.json({
        message: "User has already exist",
      });
    }

    //  Create new user, insert into DB
    //  Has password (mã hoá password)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //  Create new user object
    const newUser = new UserModel({
      email,
      fullname,
      password: hashedPassword,
    });

    // Insert new record 
    await newUser.save();

    //  Response to client
    res.status(201).json({
      message: "Register new user successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/me',authMiddleware ,async (req, res) => {
  const {id} = req.users;
  const currentUser = await UserModel.findById(id).select("-password");
  res.json({
    userInfo: currentUser,
  });
})
router.get('/',async (req, res) => {
  try {
    const user =  await UserModel.find()
    res.json({
      data:user
    })
  } catch (error) {
    res.json({
      message: 'loi',
      
    })
  }
 
})

export default router;