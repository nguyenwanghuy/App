import '../assets/thematic.css';
import React, { useEffect, useState } from 'react';
import Subject from '../components/Subject';
import CardItem from '../components/CardItem';
import authAPI from '../api/authAPI';

const Thematic = () => {
  const [subject, setSubject] = useState([
    { id: 1, checked: false, label: 'Toán' },
    { id: 2, checked: false, label: 'Ngữ văn' },
    { id: 3, checked: false, label: 'Tiếng Anh' },
  ]);

  const [searchTempInput, setSearchTempInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [video, setVideo] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await authAPI.getAllVideos();
        if (response.data.data) {
          setVideo(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getAll();
  }, []);

  useEffect(() => {
    // When subject or search input changes, filter videos
    const filteredVideos = video.filter((video) => {
      const isSelectedSubject =
        selectedSubjects.length === 0 ||
        selectedSubjects.includes(video.subject);
      const isMatchingSearchTerm = video.title
        .toLowerCase()
        .includes(searchTempInput.toLowerCase());
      return isSelectedSubject && isMatchingSearchTerm;
    });

    setSearchResult(filteredVideos);
  }, [subject, searchTempInput, video, selectedSubjects]);

  const handleChangeChecked = (id) => {
    const updatedSubject = subject.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );

    setSubject(updatedSubject);
    setSelectedSubjects(
      updatedSubject.filter((item) => item.checked).map((item) => item.label),
    );
  };

  const handleSearch = () => {
    setIsSearching(true);
  };

  const filteredVideos = isSearching ? searchResult : video;

  return (
    <div className='thematic-page'>
      <div className='checkbox'>
        <Subject subject={subject} changeChecked={handleChangeChecked} />
      </div>
      <div className='right-container'>
        <div className='search-container'>
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
              className='color-darkgrey border-0 outline-none w-100 p-2 mt-6'
              value={searchTempInput}
              onChange={(e) => setSearchTempInput(e.target.value)}
            />
            <button
              className='p-3 bg-slate-300 text-white'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className='content-container'>
          {filteredVideos.map((video) => (
            <div className='content-item' key={video.id}>
              <CardItem
                id={video.id}
                title={video.title}
                videoUrl={video.videoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thematic;
