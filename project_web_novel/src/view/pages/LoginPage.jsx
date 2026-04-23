import React, { useState, useEffect } from 'react';
import Header from '../components/Layout/Header'; 
import Footer from '../components/Layout/Footer'; 
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ userName: '', password: '' });
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    alert(`Đăng nhập thành công, chào mừng ${credentials.userName}!`);
    navigate('/');
  };
  return (
    <div className='login_container'>
        <Header/>
        /** Center*/ 
        <div className="auth-container">
          <h2>Đăng Nhập</h2>
          <form onSubmit={onLogin}>
            <input type="text" placeholder="Tên đăng nhập" required
              onChange={(e) => setCredentials({...credentials, userName: e.target.value})} />
            <input type="password" placeholder="Mật khẩu" required
              onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
            <button type="submit" className="btn-submit">Vào hiên nhà</button>
          </form>

          <div className="social-login">
            <p>Tiếp tục với:</p>
            <button onClick={() => { handleSocialLogin('Google'); navigate('/'); }} className="btn-social google">Google</button>
            <button onClick={() => { handleSocialLogin('Facebook'); navigate('/'); }} className="btn-social facebook">Facebook</button>
          </div>
          <p className="footer-text">Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link></p>
        </div>
        <Footer/>
    </div>

  );
};


export default LoginPage;