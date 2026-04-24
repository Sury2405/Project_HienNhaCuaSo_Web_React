import React, { useState } from 'react';
import Header from '../components/Layout/Header'; 
import Footer from '../components/Layout/Footer'; 
import { useNavigate, Link } from 'react-router-dom';
import authSevices from '../../controller/services/authSevices'; // Import default
import '../styles/PageCss/RegisterPage.css';

const RegisterPage = () => {
  // 1. Cập nhật state thêm 'name' và 'confirmPassword'
  const [formData, setFormData] = useState({ 
    userName: '', 
    name: '', // Tên hiển thị
    email: '', 
    password: '',
    confirmPassword: '' // Nhập lại mật khẩu
  });
  
  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();

    // 2. Kiểm tra mật khẩu nhập lại có khớp không
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu nhập lại không khớp. Vui lòng kiểm tra lại!");
      return;
    }

    // 3. Gọi hàm từ đối tượng authSevices
    authSevices.handleRegister(formData);
    
    alert("Đăng ký thành công! Bạn hiện là Member.");
    navigate('/login');
  };

  return (
    <div className='register_container'>
        <Header/>
        <div className="auth-container">
          <h2>Đăng Ký</h2>
          <form onSubmit={onRegister}>
            {/* Trường Tên người dùng (Display Name) */}
            <input 
              type="text" 
              placeholder="Họ và tên của bạn" 
              required
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />

            <input 
              type="text" 
              placeholder="Tên đăng nhập" 
              required
              onChange={(e) => setFormData({...formData, userName: e.target.value})} 
            />

            <input 
              type="email" 
              placeholder="Email" 
              required
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />

            <input 
              type="password" 
              placeholder="Mật khẩu" 
              required
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
            />

            {/* Trường Nhập lại mật khẩu */}
            <input 
              type="password" 
              placeholder="Nhập lại mật khẩu" 
              required
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} 
            />

            <button type="submit" className="btn-submit">Tạo tài khoản</button>
          </form>

          <div className="social-login">
            <p>Hoặc đăng ký nhanh qua:</p>
            <button 
              onClick={() => { authSevices.handleSocialLogin('Google'); navigate('/'); }} 
              className="btn-social google"
            >
              Google
            </button>
            <button 
              onClick={() => { authSevices.handleSocialLogin('Facebook'); navigate('/'); }} 
              className="btn-social facebook"
            >
              Facebook
            </button>
          </div>
          <p className="footer-text">Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
        </div>
        <Footer/>
    </div>
  );
};

export default RegisterPage;