import React, { useEffect, useState } from 'react';
import AuthenContext from './AuthenContext';
import axios from 'axios';
import authAPI from '../../api/authAPI';

const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {},
  });

  const handleLogin = async () => {
    try {
      const response = await authAPI.authInfo();
      const data = response.data;
      setAuth({
        isAuthenticated: true,
        user: data.userInfo,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = () => {
    setAuth({
      isAuthenticated: false,
      user: {},
    });
  };
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    // call API/me => check token
    if (accessToken) {
      handleLogin();
    }
  }, []);
  return (
    <AuthenContext.Provider
      value={{
        auth,
        handleLogin,
        handleLogOut,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};

export default AuthState;
