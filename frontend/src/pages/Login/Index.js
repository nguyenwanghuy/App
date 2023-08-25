import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../assets/background.jpg';
import { useFormik } from 'formik';

const Login = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const onSubmit = () => {
    console.log('logged in');
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        username: '',
        email: '',
        password: '',
      },
      onSubmit,
    });
  return (
    <div className='flex h-screen justify-center items-center' style={myStyle}>
      <div className='bg-gray-700 flex-col items-center border p-10'>
        <h1 className='text-4xl font-bold mb-6 text-center text-white'>
          LOGIN
        </h1>
        <form
          className='w-64 mx-auto'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <input
            type='email'
            id='email'
            name='email'
            className={
              errors.email && touched.email
                ? 'block w-full rounded-sm p-2 border border-2 border-rose-600'
                : 'block w-full rounded-sm p-2 mb-2 border'
            }
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='E-mail'
          />
          {errors.email && touched.email && (
            <p className='text-xs text-rose-600 mb-2'>{errors.email}</p>
          )}
          <input
            type='password'
            id='password'
            name='password'
            className={
              errors.password && touched.password
                ? 'block w-full rounded-sm p-2  border border-2 border-rose-600'
                : 'block w-full rounded-sm p-2 mb-2 border'
            }
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Password'
          />
          {errors.password && touched.password && (
            <p className='text-xs text-rose-600 mb-2'>{errors.password}</p>
          )}
          <button
            className='bg-blue-500 text-white block w-full rounded-sm p-2'
            type='submit'
          >
            Log in
          </button>
        </form>
        <div className='mt-6 flex justify-between'>
          <span className='text-white'>New user?</span>
          <Link to='/register' className='text-red-400'>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
