import axiosInstance from './axiosInstance';

const videoAPI = {
  uploadVideo: (data) => axiosInstance.post('/video/upload-video', data),
};

export default videoAPI;
