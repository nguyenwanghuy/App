import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
// import axios from 'axios';
import background from '../../assets/background.jpg';
import authAPI from '../../api/authAPI';
import AuthenContext from '../../context/AuthenContext/AuthenContext';


const Login = () => {
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const navigate = useNavigate();
  const {handleLogin} = useContext(AuthenContext)
  const {auth} = useContext(AuthenContext)
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  // const onSubmit = () => {
  //   console.log('logged in');
  // };

  const formik =
    useFormik({
      initialValues: {
        username: '',
        email: '',
        password: '',
      },
      onSubmit: async (values) => {
        try {
        setLoading(true); 
        setError(null)
         const response = await authAPI.login(values)
         const {accessToken} = response.data
        
          //save access token to local storage
          localStorage.setItem("accessToken",accessToken)

          //after login
          await handleLogin();
          // // trở về home
          navigate("/")
        } catch (error) {
    
          setError(error.response.data.message)
        }finally{
          setLoading(false);
        }
      }
    });
    const  { values, errors, touched, handleChange, handleSubmit, handleBlur } = formik
    if(auth.isAuthenticated) {
      return <Navigate to="/"/>
    }
    
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
          {error && <p style={{color:"#F08080"}}>{error}</p>}
          <button
            className='bg-blue-500 text-white block w-full rounded-sm p-2'
            type='submit'
          >
           {loading ? 'Loading...' :'login'}
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
