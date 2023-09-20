import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    videoUrl: { type: String },
    subject: { type: String, required: true, default: [] },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { timestamps: true },
);
const VideoModel = mongoose.model('videos', videoSchema);
export default VideoModel;
