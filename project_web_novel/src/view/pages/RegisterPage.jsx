import React, { useState, useEffect } from 'react';
import Header from '../components/Layout/Header'; 
import Footer from '../components/Layout/Footer'; 
import { useNavigate, Link } from 'react-router-dom';
import {DataUser} from '../../model/mockData/DataUser';
import {authSevices} from '../../controller/services/authSevices';
import '../styles/PageCss/RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ userName: '', email: '', password: '' });
  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();
    handleRegister(formData);
    alert("Đăng ký thành công! Bạn hiện là Member.");
    navigate('/login');
  };

  return (
    <div className='register_container'>
        <Header/>
        <div className="auth-container">
          <h2>Đăng Ký</h2>
          <form onSubmit={onRegister}>
            <input type="text" placeholder="Tên đăng nhập" required
              onChange={(e) => setFormData({...formData, userName: e.target.value})} />
            <input type="email" placeholder="Email" required
              onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <input type="password" placeholder="Mật khẩu" required
              onChange={(e) => setFormData({...formData, password: e.target.value})} />
            <button type="submit" className="btn-submit">Tạo tài khoản</button>
          </form>

          <div className="social-login">
            <p>Hoặc đăng ký nhanh qua:</p>
            <button onClick={() => { handleSocialLogin('Google'); navigate('/'); }} className="btn-social google">Google</button>
            <button onClick={() => { handleSocialLogin('Facebook'); navigate('/'); }} className="btn-social facebook">Facebook</button>
          </div>
          <p className="footer-text">Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
        </div>
        <Footer/>
    </div>

  );
};

export default RegisterPage;
