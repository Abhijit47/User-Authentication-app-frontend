import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap';
import { HiAtSymbol, HiKey, HiUserCircle, HiLockClosed } from 'react-icons/hi2';
import toast from 'react-hot-toast';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
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
      // check password and conf. password are matched or not
      // console.log(user.password);
      // console.log(user.cpassword);
      // console.log((user.password === user.cpassword) === false);
      if (user.password !== user.cpassword) {
        toast('Passwords are not matched', {
          position: 'bottom-right',
          icon: '❌',
          className:
            'bg-warning border border-bottom-5 border-danger text-dark shadow-sm',
        });
        // navigate user to register page
        return navigate('/register');
      }
      const res = await axios.post(
        process.env.REACT_APP_REGISTER_URI_PROD,
        user
      );

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

      // navigate user to login page
      navigate('/login');
    } catch (err) {
      const { message } = err.response.data;
      toast(message, {
        duration: 4000,
        position: 'bottom-left',

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

      // navigate user to register page
      navigate('/register');
    }
  };

  return (
    <Container className='bg-light p-4' fluid>
      <div className='hstack gap-2 justify-content-center mt-lg-3'>
        <span className='fs-1 mb-2'>
          <HiUserCircle />
        </span>
        <h1 className='text-center mb-0'>User Registration</h1>
      </div>
      <div className='row col-lg-4 col-md-9 col gx-0 p-4 bg-dark bg-gradient m-auto rounded-3 shadow-sm mt-lg-5'>
        <Form
          action=''
          method='POST'
          onSubmit={handleSubmit}
          className='vstack gap-4 align-items-center'>
          <InputGroup>
            <InputGroupText>
              <HiUserCircle className='fs-5' />
            </InputGroupText>
            <Input
              name='name'
              id='#name'
              value={user.name}
              minLength={4}
              placeholder='Ex: John Doe'
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <InputGroupText>
              <HiAtSymbol className='fs-5' />
            </InputGroupText>
            <Input
              name='email'
              id='#email'
              value={user.email}
              minLength={10}
              placeholder='Ex: email@example.com'
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
              placeholder='Enter password'
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <InputGroupText>
              <HiLockClosed className='fs-5' />
            </InputGroupText>
            <Input
              type='password'
              name='cpassword'
              id='#cpassword'
              value={user.cpassword}
              minLength={8}
              placeholder='Enter confirm password'
              onChange={handleChange}
              required
            />
          </InputGroup>

          <div className='hstack gap-2 justify-content-center'>
            <Button color='success' type='submit'>
              Register
            </Button>
            <Button
              color='warning'
              outline
              type='submit'
              onClick={() => navigate('/login')}>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
