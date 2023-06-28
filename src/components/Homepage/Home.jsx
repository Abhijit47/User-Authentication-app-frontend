import React from 'react';
import { SiAuth0 } from 'react-icons/si';
import { Container } from 'reactstrap';

const homePageStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '85vh',
};

const Home = () => {
  return (
    <Container style={homePageStyle}>
      <div className='hstack gap-2 align-items-center'>
        <span className='mb-1'>
          <SiAuth0 className='fs-2 text-danger' />
        </span>
        <h1 className='text-center text-success-emphasis'>
          User Authentication App
        </h1>
      </div>
    </Container>
  );
};

export default Home;
