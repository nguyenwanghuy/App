import axiosInstance from './axiosInstance';

const authAPI = {
  login: (values) => axiosInstance.post('/auth/login', values),

  register: (values) => axiosInstance.post('/auth/register', values),
  authInfo: () => axiosInstance.get('/auth/me'),
  searchUser: (values) => axiosInstance.get(`/users?fullname=${values}`),
  createPost: (values) => axiosInstance.post('/posts', values),
  getAllPosst: () => axiosInstance.get('/posts'),
  searchText: (values) => axiosInstance.get(`/posts/search?title=${values}`),
  getAllVideos: () => axiosInstance.get('/video'),
  addVideo: (values) => axiosInstance.post('/video/upload', values),
};

export default authAPI;
