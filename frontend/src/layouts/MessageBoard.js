import React from 'react';
import ChatInput from '../components/ChatInput';
import ReceiverInfo from '../components/ReceiverInfo';

const MessageBoard = () => {
  return (
    <div className='flex flex-col bg-indigo-50 w-full'>
      <div>
        <ReceiverInfo />
      </div>
      <div className='flex-grow'>message here</div>
      <div>
        <ChatInput />
      </div>
    </div>
  );
};

export default MessageBoard;
