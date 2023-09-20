import UserModel from '../models/userModel.js';
import VideoModel from '../models/videoModel.js';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dmlc8hjzu',
  api_key: '463525567462749',
  api_secret: 'gXldLMlEHGYIDKwoKTBaiSxPEZU',
});

const getAll = async (req, res) => {
  const videos = await VideoModel.find();
  res.send({ data: videos });
};

const addVideo = async (req, res) => {
  const { title, videoUrl, subject } = req.body;
  const { id } = req.user;
  console.log(id);
  const currentUser = await UserModel.findById(id);
  if (!currentUser) {
    res.status = 400;
    throw new Error('User not found');
  }
  const newVideo = new VideoModel({
    title,
    videoUrl,
    subject,
    user: id,
  });

  await newVideo.save();
  res.status(201).json({
    data: newVideo,
    message: 'Upload new  video successfully',
  });
};

const deleteVideo = async (req, res) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) throw new Error('Video not found');
    if (req.user.id === video.userId) {
      await VideoModel.findByIdAndDelete(req.params.id);
      res.status(200).send('video has been deleted');
    }
  } catch (error) {
    res.status(500).send({
      error: error.messages,
    });
  }
};

const getVideo = async (req, res) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    res.status(200).send(video);
  } catch (error) {
    res.status(500).send({
      error: error.messages,
    });
  }
};

const searchVideo = async (req, res) => {
  const query = req.query.q;
  try {
    const video = await VideoModel.findById({
      title: { $regex: query, $options: 'i' },
    });
    res.status(200).send(video);
  } catch (error) {
    res.status(500).send({
      error: error.messages,
    });
  }
};

const uploadVideo = async (req, res) => {
  try {
    const { id } = req.user;
    const file = req.file;

    console.log(file);

    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: 'video',
      folder: 'video',
    });

    fs.unlinkSync(file.path);

    const videoUrl = result && result.secure_url;

    return res.json({
      message: 'Upload video successfully',
      data: videoUrl,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const videoController = {
  getAll,
  addVideo,
  deleteVideo,
  getVideo,
  searchVideo,
  uploadVideo,
};
export default videoController;
