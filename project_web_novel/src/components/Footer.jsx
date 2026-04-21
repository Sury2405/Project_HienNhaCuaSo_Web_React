import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">Hiên Nhà Của Sò</div>
          <p>Trang đọc truyện trực tuyến miễn phí.</p>
        </div>
        <div className="footer-contact">
          <div className="contact-item">Email: hiennhacuaso@gmail.com</div>
          <div className="contact-item">Facebook: /hiennhacuaso</div>
        </div>
      </div>
      <div className="footer-bottom">
        Design By Hiên Nhà Của Sò - Website đang thử nghiệm
      </div>
    </footer>
  );
};

export default Footer;