import React from 'react';

const Avatar = () => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-11 h-11 bg-red-200 rounded-full flex items-center ml-5 mb-2'>
        <div className='text-center w-full'>AH</div>
      </div>
      <span className='pb-1'>User name</span>
    </div>
  );
};

export default Avatar;
