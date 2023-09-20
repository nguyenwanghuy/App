import React, { useContext, useEffect, useState } from 'react';
import { Carousel, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Tabnavi from '../../components/Tabs/Tabnavi.js';
import '../../assets/styles/asktutor.css';
import authAPI from '../../api/authAPI.js';
import imageAPI from '../../api/imageAPI.js';
import { PostContext } from '../../context/PostContext.js';
import AuthenContext from '../../context/AuthenContext/AuthenContext.js';

// const AskTutor = () => {
//   const contentStyle = {
//     height: '460px',
//     backgroundImage:
//       'url(https://colearn.vn/_ipx/f_webp,q_90,fit_cover/https://static.colearn.vn:8413/v1.0/upload/config/image/07092023/hoi-bai-mobifone-wlQlJu.jpg)',
//     backgroundSize: '100%',
//   };
//   const contentStyle1 = {
//     height: '460px',
//     backgroundImage:
//       'url(https://colearn.vn/_ipx/f_webp,q_90,fit_cover/https://static.colearn.vn:8413/v1.0/upload/config/image/07092023/hoi-bai-dia-su-colearn-pwTjvK.jpg)',
//     backgroundSize: '105%',
//   };
//   return (
//     <>
//       <Carousel autoplay>
//         <div>
//           <h3 style={contentStyle}></h3>
//         </div>
//         <div>
//           <h3 style={contentStyle1}></h3>
//         </div>
//       </Carousel>

//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           padding: '30px',
//         }}
//       >
//         <h2 className='text-top'>HỎI BÀI</h2>
//         <form style={{ display: 'flex' }}>
//           <input
//             className='search'
//             placeholder='Hãy nhập từ khoá bạn muốn tìm'
//           />
//           <Tooltip title='Search'>
//             <Button
//               style={{ marginTop: '15px' }}
//               shape='circle'
//               icon={<SearchOutlined />}
//             />
//           </Tooltip>
//         </form>
//         <button className='ask'>Đặt Câu Hỏi</button>
//       </div>

//       <div className='content-mid'>
//         <Tabnavi />
//       </div>
//     </>
//   );
// };

// export default AskTutor;

// import React, { useContext, useState } from 'react';
// import { Carousel, Button, Tooltip } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import Tabnavi from '../../components/Tabs/Tabnavi.js';
// import '../../assets/styles/asktutor.css';
// import AuthDraw from '../../components/AuthDraw.js';
// import AuthenContext from '../../context/AuthenContext/AuthenContext.js';

const AskTutor = () => {
  const [resUpload, setResUpload] = useState(false);
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    image: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [searchResults, setSearchResults] = useState([]); // State for search results

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { setAllPost } = useContext(PostContext);
  // get all posts
  useEffect(() => {
    const getAll = async () => {
      const respone = await authAPI.getAllPosst();
      if (respone) {
        setAllPost(respone.data.data);
      }
      return respone;
    };
    getAll();
  }, [resUpload]);

  //upload file
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setIsLoading(true);
      const data = new FormData();
      data.append('image', file);
      const imagess = await imageAPI.uploadImage(data);
      setIsLoading(false);

      setPostData({ ...postData, image: imagess.data.data });
    } catch (error) {
      console.error(error);
    }
  };
  console.log(postData);
  // handle upload
  const handleUpload = async () => {
    const res = await authAPI.createPost(postData);
    if (res) {
      setResUpload(true);
      setModal(false);
    }
  };

  // search
  // const onSearch = async (searchTitle) => {
  //   const res = await authAPI.searchText(searchTitle);
  //   console.log(res);
  // };

  const onSearch = async () => {
    try {
      const response = await authAPI.searchText(searchQuery);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const contentStyle = {
    height: '460px',
    backgroundImage:
      'url(https://colearn.vn/_ipx/f_webp,q_90,fit_cover/https://static.colearn.vn:8413/v1.0/upload/config/image/07092023/hoi-bai-mobifone-wlQlJu.jpg)',
    backgroundSize: '100%',
  };

  const contentStyle1 = {
    height: '460px',
    backgroundImage:
      'url(https://colearn.vn/_ipx/f_webp,q_90,fit_cover/https://static.colearn.vn:8413/v1.0/upload/config/image/07092023/hoi-bai-dia-su-colearn-pwTjvK.jpg)',
    backgroundSize: '105%',
  };

  // const handleAskQuestionClick = () => {
  //   if (!isUserLoggedIn) {
  //     window.alert('Vui lòng đăng nhập để đặt câu hỏi.');
  //   } else {
  //     console.log('đặt câu hỏi thành công');
  //   }
  // };

  // const {auth} = useContext(AuthenContext)
  // const isUserLoggedIn = auth.isAuthenticated
  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle1}></h3>
        </div>
      </Carousel>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '30px',
          width: '100%',
        }}
      >
        <h2 className='text-top'>HỎI BÀI</h2>
        <form style={{ display: 'flex' }}>
          <input
            className='search'
            type='text'
            name='search'
            id='search'
            title='Enter to Search'
            placeholder='Hãy nhập từ khoá tìm kiếm'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSearch();
              }
            }}
          />
          <Tooltip title='Search'>
            <Button
              style={{ marginTop: '15px' }}
              shape='circle'
              icon={<SearchOutlined />}
              onClick={onSearch}
            />
          </Tooltip>
        </form>

        <button className='ask' color='danger' onClick={toggle}>
          Đặt câu hỏi
        </button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Thông tin chi tiết</ModalHeader>
          <ModalBody>
            <input
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
            <input
              onChange={(e) =>
                setPostData({ ...postData, content: e.target.value })
              }
            />
            <div>
              {isLoading ? 'Loading...' : ''}
              {postData.image ? <img alt='' src={postData.image} /> : null}
            </div>
          </ModalBody>
          <ModalFooter>
            <input type='file' accept='image/*' onChange={handleFileChange} />
            <button onClick={handleUpload} className='ask-size'>
              Đăng bài
            </button>
          </ModalFooter>
        </Modal>
      </div>
      <div className='content-mid'>
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div key={index} className='post'>
              <h3>{result.title}</h3>
              <p>{result.content}</p>
              {result.image && <img alt='' src={result.image} />}
            </div>
          ))
        ) : (
          <Tabnavi />
        )}
      </div>
      <div></div>
    </>
  );
};

export default AskTutor;
