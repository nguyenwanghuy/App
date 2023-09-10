import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/login.css';

// import { useFormik } from "formik";
// import { useContext } from "react";
// import AuthContext from "../../contexts/AuthContext/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import AuthService from "../../services/authService";
// import { Input, Button, Form, message } from "antd";

// const authService = new AuthService();

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const { handleLogin } = useContext(AuthContext);

//   const { handleSubmit, handleChange, values } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: async (values) => {
//       try {
//         const response = await authService.login(values);
//         if (response.status === 200) {
//           localStorage.setItem("accessToken", response?.data?.accessToken);
//           await handleLogin(values);
//           message.success("Đăng nhập thành công");
//           navigate("/");
//         }
//       } catch (error) {
//         message.error(error.response.data.message || "Error");
//       }
//     },
//   });

const Register = () => {
  return (
    <div className='login-page'>
      <div className='login-container'>
        <h1>Đăng kí</h1>
        <label htmlFor='fullname'>Họ tên</label>
        <input
          id='fullname'
          name='fullname'
          type='text'
          placeholder='Enter your email'
        />

        <form className='login-form'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='Enter your email'
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Enter your password'
          />
          <button type='submit' className='auth-button'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
