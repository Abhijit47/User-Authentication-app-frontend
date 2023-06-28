import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './components/Homepage/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/NavbarC';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [loginUser, setLoginUser] = useState({});

  return (
    <>
      <Navbar loginUser={loginUser} setLoginUser={setLoginUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
