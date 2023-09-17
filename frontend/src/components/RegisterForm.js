import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import AuthenContext from '../context/AuthenContext/AuthenContext';
import authAPI from '../api/authAPI';

const Register = (props) => {
  const { handleLogin } = useContext(AuthenContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError(null);
        await authAPI.register(values);

        await handleLogin();

        if (props.onClose) {
          props.onClose();
        }
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    },
  });

  const { handleSubmit, handleChange, isValid } = formik;

  return (
    <div className='login-page'>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1>Đăng kí</h1>
          <label htmlFor='username'>Họ tên</label>
          <input
            id='username'
            name='username'
            type='text'
            placeholder='Enter your username'
            onChange={handleChange}
          />
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='Enter your email'
            onChange={handleChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Enter your password'
            onChange={handleChange}
          />
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
          <button
            className='btn btn-primary w-100'
            type='submit'
            disabled={!isValid}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
