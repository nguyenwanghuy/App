import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import '../assets/login.css';
import { useFormik } from 'formik';
import AuthenContext from '../context/AuthenContext/AuthenContext';
import authAPI from '../api/authAPI';

const LoginFormValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email does not valid')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { auth, handleLogin } = useContext(AuthenContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError(null);
        const response = await authAPI.login(values);
        const { accessToken } = response.data;
        // Save access token to local storage
        localStorage.setItem('accessToken', accessToken);

        // Call logic after login successfully
        await handleLogin();
        props.onClose();
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    },
    validationSchema: LoginFormValidationSchema,
  });

  const { handleSubmit, handleChange, values, isValid, errors } = formik;

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h1>Đăng nhập</h1>

        <form onSubmit={handleSubmit} className='login-form'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='Enter your email'
            onChange={handleChange}
            value={values.email}
          />
          {errors?.email && (
            <small className='text-danger'>{errors.email}</small>
          )}
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Enter your password'
            onChange={handleChange}
            value={values.password}
          />
          {errors?.password && (
            <small className='text-danger'>{errors.password}</small>
          )}
          {error && (
            <p
              style={{
                color: 'red',
                margin: '10px 0',
              }}
            >
              {error}
            </p>
          )}
          <button type='submit' className='auth-button' disabled={!isValid}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
