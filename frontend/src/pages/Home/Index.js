import React from 'react';
import { Carousel,Tabs } from 'antd';
import  '../../assets/styles/home.css'

const HomePage = () => {
  const contentStyle = {
    height: '495px',
    backgroundImage: 'url(https://colearn.vn/_ipx/f_webp,q_90,fit_cover/https://static.colearn.vn:8413/v1.0/upload/config/image/07092023/hoi-bai-dia-su-vinaphone-Q8qLkB.jpg)',
    backgroundSize: "100%"
  };
  const contentStyle1 = {
    height: '495px',
    backgroundImage: 'url(https://colearn.vn/_ipx/f_webp,q_90,fit_cover/https://static.colearn.vn:8413/v1.0/upload/config/image/24032023/he-sinh-thai-colearn-b6fHUK.png)',
    backgroundSize: "105%"
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
      <div className='content-mid'>
          <div className='content-mid-left'>
           <div style={{margin:'20% 20% 5%'}}>
           <p style={{
              fontSize: '60px',
              fontWeight: '700'
            }}>
            CoLearn
            </p>
            <span><p style={{
              fontSize: '25px',
              opacity:0.7
            }}>Nền tảng học tập kết nối</p></span>
           </div>
           <div className='dowload' style={{display:'flex'}}>
           <img src='https://colearn.vn/ui-new/images/app-store-btn.png' /> 
            <img style={{marginLeft:'20px'}} src='https://colearn.vn/ui-new/images/play-store-btn.png'/>
           </div>
       
          </div>
          <div className='content-mid-right'>
              <img src='https://colearn.vn/ui-new/images/app-links-bg.png'/>
            </div>
      </div>
      <div className='askSub'>
        <p>Hỏi bài</p>
       <div className='askSub-mid'>
       <Tabs defaultActiveKey='tab1' tabPosition='right'>
          <Tabs.TabPane tab="◻ Hỏi bài gia sư" key="tab1" >
            <img src='https://colearn.vn/ui-new/images/qs-image-col.png'/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="◻ Tìm lời giải" key="tab2">
           <img src='https://colearn.vn/ui-new/images/lh0-1.png'/>
          </Tabs.TabPane>
        </Tabs>
       </div>
       <p>Thư viện và công cụ học tập</p> 
          <p style={{fontSize:'20px',marginTop:'30px',opacity:0.7}}>Chuyên đề</p>
       <div className='fame-wo'>
          <div className='fame-wo-ni'>
            <ul>
              <li>
              Hệ thống video bài giảng theo chủ đề.
              </li>
              <li>
              Tài liệu, bài tập, trắc nghiệm theo lộ trình học.
              </li>
            </ul>
            <img style={{marginTop:'70px'}} src='https://colearn.vn/ui-new/images/block-card-img.png'/>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default HomePage;
