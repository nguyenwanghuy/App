import axiosInstance from './axiosInstance';

const imageAPI = {
  uploadImage: (data) => axiosInstance.post('/posts/upload-image', data),
};

export default imageAPI;
