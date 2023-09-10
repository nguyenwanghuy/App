import React from 'react';
import authAPI  from '../api/authAPI';

const Contact = () => {

  const onSeach = async (searchText) => {
    const res = await authAPI.searchUser(searchText)
    console.log(res);
  }

  return (
    
          <input type="text" name="search" id="search" title="Enter to Search"
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              onSeach(e.currentTarget.value)
            }
          }} />
  )
};

export default Contact;

