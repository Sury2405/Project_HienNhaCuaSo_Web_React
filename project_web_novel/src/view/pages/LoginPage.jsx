import React, { useState, useEffect } from 'react';
import Header from '../components/Layout/Header'; 
import Footer from '../components/Layout/Footer'; 
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='login_container'>
        <Header/>

        <Footer/>
    </div>

  );
};

export default LoginPage;