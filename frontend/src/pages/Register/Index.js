import React, { useContext,useState } from 'react';
import background from '../../assets/background.jpg';
import { useFormik } from 'formik';
import { basicShemas } from '../../schemas';
import AuthenContext from '../../context/AuthenContext/AuthenContext';
import { Navigate, useNavigate } from 'react-router-dom';
import authAPI from '../../api/authAPI';

const Register = () => {
  const {auth} = useContext(AuthenContext)
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const navigate = useNavigate()
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  // const onSubmit = (value) => {
  //   console.log('submit');
  // };

  const formik =
    useFormik({
      initialValues: {
        fullname: '',
        email: '',
        password: '',
      },
      // validationSchema: basicShemas,
      onSubmit: async  (values) => {
        try {
          setLoading(true);
          setError(null)
          await authAPI.register(values);
          navigate("/login")
        } catch (error) {
          setError(error.response.data.message)
        } finally {
          setLoading(false);
        }
      }
    });

  // console.log(errors);
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =formik
  if(auth.isAuthenticated) {
    return <Navigate to="/"/>
  }
  return (
    <div className='flex h-screen justify-center items-center' style={myStyle}>
      <div className='bg-gray-700 flex-col items-center border p-10'>
        <h1 className='text-4xl font-bold mb-6 text-center text-white'>
          Register
        </h1>
        <form
          className='w-64 mx-auto'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            id='fullname'
            name='fullname'
            className={
              errors.fullname && touched.fullname
                ? 'block w-full rounded-sm p-2  border border-2 border-rose-600'
                : 'block w-full rounded-sm p-2 mb-2 border'
            }
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='fullname'
          />
          {errors.fullname && touched.fullname && (
            <p className='text-xs text-rose-600 mb-2'>{errors.fullname}</p>
          )}
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
          {error && <p style={{color:"red"}}>{error}</p>}
          <button
            className='bg-blue-500 text-white block w-full rounded-sm p-2'
            type='submit'
           
          >
            {loading?"Loading..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
