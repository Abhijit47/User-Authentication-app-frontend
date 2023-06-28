import React from 'react';
import { Container } from 'reactstrap';
import { HiUserCircle } from 'react-icons/hi2';

const dashboardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '85vh',
};

const Dashboard = () => {
  return (
    <Container style={dashboardStyle}>
      <div className='hstack gap-2 align-items-center'>
        <span className='mb-1'>
          <HiUserCircle className='fs-1 text-danger' />
        </span>
        <h1 className='text-center text-success-emphasis'>User Dashboard</h1>
      </div>
    </Container>
  );
};

export default Dashboard;
