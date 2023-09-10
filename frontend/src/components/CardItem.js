import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from 'mdb-react-ui-kit';

const CardItem = () => {
  return (
    <MDBCard className='w-100 h-2'>
      <MDBRipple
        rippleColor='light'
        rippleTag='div'
        className='bg-image hover-overlay'
      >
        <MDBCardImage
          src='https://mdbootstrap.com/img/new/standard/nature/111.webp'
          fluid
          alt='...'
        />
        <a>
          <div
            className='mask'
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CardItem;
