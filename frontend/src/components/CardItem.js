import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRipple,
} from 'mdb-react-ui-kit';

const CardItem = ({ title, videoUrl }) => {
  const handleCardClick = () => {
    window.open(videoUrl, '_blank');
  };
  return (
    <MDBCard className='w-100 h-2' onClick={handleCardClick}>
      <MDBRipple
        rippleColor='light'
        rippleTag='div'
        className='bg-video hover-overlay'
      >
        <video controls width='100%'>
          <source src={videoUrl} type='video/mp4' />
        </video>
        <a>
          <div
            className='mask'
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  );
};
export default CardItem;
