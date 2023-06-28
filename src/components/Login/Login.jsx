import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap';
import { HiAtSymbol, HiKey, HiUserCircle } from 'react-icons/hi2';
import toast from 'react-hot-toast';

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(process.env.REACT_APP_LOGIN_URI_PROD, user);
      toast(res.data.message, {
        duration: 4000,
        position: 'top-center',

        // Custom Icon
        icon: '✅',

        // Styling
        style: {},
        className:
          'bg-success border border-bottom-5 border-light text-light shadow-sm',

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      // set data to login user
      setLoginUser(res.data.user);

      // navigate to user on homepage
      navigate('/dashboard');
    } catch (err) {
      const { message } = err.response.data;
      toast(message, {
        duration: 4000,
        position: 'bottom-right',

        // Custom Icon
        icon: '❌',

        // Styling
        style: {},
        className:
          'bg-danger border border-bottom-5 border-light text-light shadow-sm',

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      // navigate to user on homepage
      navigate('/login');
    }
  };

  return (
    <Container className='bg-light p-4' fluid>
      <div className='hstack gap-2 justify-content-center mt-lg-5'>
        <span className='fs-1 mb-2'>
          <HiUserCircle />
        </span>
        <h1 className='text-center mb-0'>User Login</h1>
      </div>
      <div className='row col-lg-4 col-md-9 col gx-0 p-4 bg-dark bg-gradient m-auto rounded-3 shadow-sm mt-lg-5'>
        <Form
          action=''
          method='POST'
          onSubmit={handleSubmit}
          className='vstack gap-4 align-items-center'>
          <InputGroup>
            <InputGroupText>
              <HiAtSymbol className='fs-5' />
            </InputGroupText>
            <Input
              type='email'
              name='email'
              id='#email'
              value={user.email}
              minLength={''}
              autoComplete='on'
              placeholder='email@example.com'
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <InputGroupText>
              <HiKey className='fs-5' />
            </InputGroupText>
            <Input
              type='password'
              name='password'
              id='#password'
              value={user.password}
              minLength={8}
              autoComplete='off'
              placeholder='Enter password'
              onChange={handleChange}
              required
            />
          </InputGroup>

          <Button color='success' type='submit'>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
