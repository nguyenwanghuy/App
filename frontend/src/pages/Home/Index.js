import React from 'react';
import Contact from '../../layouts/Contact';
import MessageBoard from '../../layouts/MessageBoard';
import Sidebar from '../../components/Sidebar';

const ChatPage = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <Contact />
      <MessageBoard />
    </div>
  );
};

export default ChatPage;
