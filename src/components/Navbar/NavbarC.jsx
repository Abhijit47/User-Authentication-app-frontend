import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import { SiAuth0 } from 'react-icons/si';
import { HiUserCircle } from 'react-icons/hi2';
import toast from 'react-hot-toast';

const NavbarC = ({ loginUser, setLoginUser }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const notify = () => {
    setLoginUser({});
    toast('Successfully Logout', {
      duration: 3000,
      position: 'bottom-center',

      // Custom Icon
      icon: '✅',

      // Styling
      style: {},
      className:
        'bg-success border border-bottom-5 border-dark text-light shadow-sm',

      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  };

  return (
    <div>
      <Container fluid className='gx-0'>
        <Navbar
          color='dark'
          dark
          className='position-sticky top-0 z-1 shadow-sm'>
          <Link to='/' className='text-decoration-none text-light me-auto'>
            <div className='hstack gap-2 align-items-center'>
              <SiAuth0 className='text-danger fs-3' />
              <span>Authentication</span>
            </div>
          </Link>
          {loginUser && loginUser.name ? (
            <div className='hstack gap-1 align-items-center'>
              <span className='mb-1'>
                <HiUserCircle className='fs-5 text-light' />
              </span>
              <h6 className='text-light mb-0'>
                Welcome,
                <span className='ms-2 me-4 text-capitalize'>
                  {loginUser.name}
                </span>
              </h6>
            </div>
          ) : (
            ''
          )}

          <NavbarToggler onClick={toggleNavbar} className='me-2' />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar className='p-2'>
              <div className='hstack gap-3 justify-content-center'>
                {loginUser && loginUser._id ? (
                  <NavItem className='align-self-end'>
                    <Link
                      to='/login'
                      role='button'
                      className='btn btn-outline-danger'
                      onClick={() => notify()}>
                      Logout
                    </Link>
                  </NavItem>
                ) : (
                  <>
                    <NavItem>
                      <Link
                        to='/login'
                        role='button'
                        className='btn btn-outline-light'>
                        Login
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link
                        to='/register'
                        role='button'
                        className='btn btn-info'>
                        Register
                      </Link>
                    </NavItem>
                  </>
                )}
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavbarC;
