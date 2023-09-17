import VideoModel from '../models/videoModel.js';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dmlc8hjzu',
  api_key: '463525567462749',
  api_secret: 'gXldLMlEHGYIDKwoKTBaiSxPEZU',
});

export const uploadVideo = async (req, res) => {
  const file = req.file;

  const result = await cloudinary.uploader.upload(file.path, {
    resource_type: 'video',
    folder: 'video',
  });

  const videoUrl = result && result.secure_url;

  if (!videoUrl) {
    throw new Error('Video upload failed');
  }

  const newVideo = new VideoModel({
    videoUrl: videoUrl,
  });

  await newVideo.save();

  console.log(result);
  return res.send({ messages: 'Upload video successfully' });
};

export const deleteVideo = async (req, res) => {
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

export const getVideo = async (req, res) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    res.status(200).send(video);
  } catch (error) {
    res.status(500).send({
      error: error.messages,
    });
  }
};
