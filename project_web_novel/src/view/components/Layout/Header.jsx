import React from 'react';
import '../../styles/LayoutCss/Header.css';
import { DataCategories } from '../../../model/mockData/DataCategories';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      {/* Tầng 1 */}
      <div className="header-top">
        <div className="header-logo">Hiên Nhà Của Sò</div>
        <div className="header-search">
          <input type="text" placeholder="Tìm truyện...">
          </input>
        </div>
        <div className="header-auth">
          <button className="btn-login">Đăng nhập</button>
          <button className="btn-register">Đăng ký</button>
        </div>
      </div>
      {/* Tầng 2 */}
      <nav className="header-nav">
        <ul className="nav-menu">
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/truyen-moi">Truyện mới</Link></li>
          <li><Link to= "/truyen-full">Truyện full</Link></li>
          {/* MENU THỂ LOẠI THẢ XUỐNG */}
          <li className="has-submenu">
            <span>Thể loại ▼</span>
            <ul className="submenu-grid">
              {DataCategories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/the-loai/${cat.slug}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>Bảng xếp hạng</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;