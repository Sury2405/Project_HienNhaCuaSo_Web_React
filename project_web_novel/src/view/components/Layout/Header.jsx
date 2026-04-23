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
          <button className="btn-login"><Link to= "/login" className='btn'>Đăng nhập</Link></button>
          <button className="btn-register"><Link to= "/register" className='btn'>Đăng ký</Link></button>
        </div>
      </div>
      {/* Tầng 2 */}
      <nav className="header-nav">
        <ul className="nav-menu">
          <li><Link to="/" className="nav-button">Trang chủ</Link></li>
          <li><Link to="/truyen-moi" className="nav-button">Truyện mới</Link></li>
          <li><Link to="/truyen-full" className="nav-button">Truyện full</Link></li>
          {/* MENU THỂ LOẠI THẢ XUỐNG */}
          <li className="has-submenu">
              <span className="nav-button">Thể loại ▼</span>
              <div className="submenu-container"> {/* Thêm div bọc để quản lý padding tốt hơn */}
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