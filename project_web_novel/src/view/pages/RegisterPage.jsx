import React, { useState, useEffect } from 'react';
import Header from '../components/Layout/Header'; 
import Footer from '../components/Layout/Footer'; 
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className='register_container'>
        <Header/>

        <Footer/>
    </div>

  );
};

export default RegisterPage;