import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      {/* Tầng 1 */}
      <div className="header-top">
        <div className="header-logo">Hiên Nhà Của Sò</div>
        <div className="header-search">
          <input type="text" placeholder="Tìm truyện..." />
          <button className="search-btn">🔍</button>
        </div>
        <div className="header-auth">
          <button className="btn-login">Đăng nhập</button>
          <button className="btn-register">Đăng ký</button>
        </div>
      </div>
      {/* Tầng 2 */}
      <nav className="header-nav">
        <ul className="nav-menu">
          <li>Trang chủ</li>
          <li>Truyện mới</li>
          <li>Truyện full</li>
          <li className="has-submenu">
            Thể loại ▼
            <ul className="submenu">
              <li>Ngôn tình</li>
              <li>Ngọt sủng</li>
              <li>Ngược tâm</li>
            </ul>
          </li>
          <li>Bảng xếp hạng</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;