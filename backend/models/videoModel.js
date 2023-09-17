import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  videoUrl: { type: String, required: true },
  subject: { type: String, required: true, default: [] },
});
const VideoModel = mongoose.model('videos', videoSchema);
export default VideoModel;
