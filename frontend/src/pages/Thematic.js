import React, { useState } from 'react';
import Subject from '../components/Subject';
import SearchBar from '../components/SearchBar';
import '../assets/thematic.css';
import CardItem from '../components/CardItem';

const Thematic = () => {
  const [subject, setSubject] = useState([
    { id: 1, checked: false, label: 'Toán' },
    { id: 2, checked: false, label: 'Ngữ văn' },
    { id: 3, checked: false, label: 'Tiếng Anh' },
  ]);

  const handleChangeChecked = (id) => {
    const subjectStateList = [...subject];
    const changeCheckedSubject = subjectStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );

    setSubject(changeCheckedSubject);
  };

  return (
    <div className='thematic-page'>
      <div className='checkbox'>
        <Subject subject={subject} changeChecked={handleChangeChecked} />
      </div>
      <div className='right-container '>
        <div className='search-container'>
          <SearchBar />
        </div>
        <div className='content-container'>
          {Array.from({ length: 9 }).map((_, index) => (
            <div className='content-item' key={index}>
              <CardItem />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thematic;
