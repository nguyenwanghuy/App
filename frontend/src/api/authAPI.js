import axiosInstance from './axiosInstance';

const authAPI = {
    login: (values) => axiosInstance.post("/auth/login", values),
    register: (values) => axiosInstance.post("/auth/register", values),
    authInfo: () =>axiosInstance.get("/auth/me"),
    searchUser:(values) => axiosInstance.get(`/users?fullname=${values}`),
    createPost:(values) => axiosInstance.post("/posts",values),
    getAllPosst:() => axiosInstance.get("/posts"),
    deletePost:(postId) => axiosInstance.delete(`/posts/${postId}`),
    searchText:(values) => axiosInstance.get(`/posts/search?title=${values}`),
    createComment:(values) => axiosInstance.post("/comment",values),
    getAllComments:() => axiosInstance.get("/comment")

}

export default authAPI;
