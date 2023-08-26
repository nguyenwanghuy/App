import React, { useContext } from 'react';
import AuthenContext from '../context/AuthenContext/AuthenContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate()
  const {handleLogOut, auth:{isAuthenticated}} =useContext(AuthenContext)
  const onHandleLogOut =() => {
    localStorage.removeItem("accessToken");
    //logout
    handleLogOut();
    //trở về trang login
    navigate('/login');
  }
  return <div className='bg-indigo-50 w-24'>
   {isAuthenticated && 
   <button style={{
      color: 'red'
   }} onClick={onHandleLogOut}>Log out</button>}
  </div>;
};

export default Sidebar;
