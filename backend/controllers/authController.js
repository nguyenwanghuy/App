import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import UserModel from '../models/userModel.js';

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });

  if (!existingUser) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  const isMatchPassword = await bcrypt.compare(password, existingUser.password);

  if (!isMatchPassword) {
    res.status(401);
    throw new Error('Email or password is not correct!');
  }

  const jwtPayload = {
    email: existingUser.email,
    id: existingUser.id,
    fullname: existingUser.fullname,
  };

  const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });

  res.json({
    accessToken: token,
    message: 'Login successfully',
  });
});

const register = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error('User has already exist');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    email,
    username,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).json({
    message: 'Register new user successfully',
  });
});

const getMe = async (req, res) => {
  const { id } = req.user;
  const currentUser = await UserModel.findById(id).select('-password');

  if (!currentUser) {
    res.status(401);
    throw new Error('Unauthorized user');
  }

  res.json({
    userInfo: currentUser,
  });
};

const AuthController = {
  login,
  register,
  getMe,
};

export default AuthController;
