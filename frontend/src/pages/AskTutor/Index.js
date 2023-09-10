import React from 'react'
import { Carousel,Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Tabnavi from '../../components/Tabs/Tabnavi.js'
import  '../../assets/styles/asktutor.css'


const AskTutor = () => {
  const contentStyle = {
    height: '460px',
    backgroundImage: 'url(https://colearn.vn/_ipx/f_webp,q_90,fit_cover/https://static.colearn.vn:8413/v1.0/upload/config/image/07092023/hoi-bai-mobifone-wlQlJu.jpg)',
    backgroundSize:"100%"
  };
  const contentStyle1 = {
    height: '460px',
    backgroundImage: 'url(https://colearn.vn/_ipx/f_webp,q_90,fit_cover/https://static.colearn.vn:8413/v1.0/upload/config/image/07092023/hoi-bai-dia-su-colearn-pwTjvK.jpg)',
    backgroundSize:"105%"
  };
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

  <div style={{display:'flex',justifyContent:"space-between",padding:'30px'}} >
    <h2 className='text-top'>HỎI BÀI</h2>
   <form style={{display:'flex'}}>
    <input className='search' placeholder='Hãy nhập từ khoá bạn muốn tìm'/>
    <Tooltip  title="Search">
        <Button style={{marginTop:'15px'}} shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
   </form>
    <button className='ask'>Đặt Câu Hỏi</button>
  </div>

  <div className='content-mid'>
    <Tabnavi/>
  </div>
 </>
  )
}

export default AskTutor