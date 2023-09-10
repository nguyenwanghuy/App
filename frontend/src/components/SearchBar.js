import React from 'react';

const SearchBar = () => {
  return (
    <div className='search-block d-flex align-items-center bg-white w-100 overflow-hidden border h-11 rounded-lg'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5 mx-2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </div>
      <input
        type='search'
        className='color-darkgrey border-0 outline-none w-100 p-2'
      />
      <button className='p-3 bg-slate-300 text-white'>Search</button>
    </div>
  );
};

export default SearchBar;
