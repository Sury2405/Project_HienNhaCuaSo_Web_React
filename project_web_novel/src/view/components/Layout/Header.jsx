import React, { useState, useEffect } from 'react';
import '../../styles/LayoutCss/Header.css';
import { DataCategories } from '../../../model/mockData/DataCategories';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  // Kiểm tra trạng thái đăng nhập từ localStorage khi component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <header className="header-container">
      {/* Tầng 1 */}
      <div className="header-top">
        <div className="header-logo">Hiên Nhà Của Sò</div>
        <div className="header-search">
          <input type="text" placeholder="Tìm truyện..." />
        </div>

        <div className="header-auth">
          {currentUser ? (
            /* HIỂN THỊ KHI ĐÃ ĐĂNG NHẬP */
            <div className="user-logged-in" onClick={() => navigate('/profile')}>
              <div className="avatar-wrapper">
                <img src={currentUser.avatar} alt="avatar" className="header-avatar" />
              </div>
              <div className="user-info-header">
                <span className="welcome-txt">Chào mừng,</span>
                <span className="user-name-txt">{currentUser.name}</span>
                <span className={`role-tag ${currentUser.role}`}>
                  {currentUser.role.toUpperCase()}
                </span>
              </div>
            </div>
          ) : (
            /* HIỂN THỊ KHI CHƯA ĐĂNG NHẬP */
            <>
              <button className="btn-login">
                <Link to="/login" className='btn'>Đăng nhập</Link>
              </button>
              <button className="btn-register">
                <Link to="/register" className='btn'>Đăng ký</Link>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Tầng 2 */}
      <nav className="header-nav">
        <ul className="nav-menu">
          <li><Link to="/" className="nav-button">Trang chủ</Link></li>
          <li><Link to="/truyen-moi" className="nav-button">Truyện mới</Link></li>
          <li><Link to="/truyen-full" className="nav-button">Truyện full</Link></li>
          <li className="has-submenu">
            <span className="nav-button">Thể loại ▼</span>
            <div className="submenu-container">
              <div className="submenu-grid">
                {DataCategories.map((cat) => (
                  <Link 
                    key={cat.id} 
                    to={`/the-loai/${cat.slug}`} 
                    className="category-button"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li><Link to="/bang-xep-hang" className="nav-button">Bảng xếp hạng</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;