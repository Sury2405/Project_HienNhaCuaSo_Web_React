import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { DataUser } from '../../model/mockData/DataUser';
import '../styles/PageCss/ProfilePage.css';

const ProfilePage = () => {
    // Giả sử lấy user đăng nhập hiện tại (ở đây lấy tạm user id: 1 là Admin)
    const [currentUser] = useState(DataUser[0]); 

    return (
        <div className="profile-page">
            <Header />
            <div className="profile-container">
                {/* PHẦN CHUNG: THÔNG TIN CÁ NHÂN */}
                <section className="user-header">
                    <div className="avatar-wrapper">
                        <img src={currentUser.avatar} alt="avatar" />
                        <span className={`role-badge ${currentUser.role}`}>
                            {currentUser.role.toUpperCase()}
                        </span>
                    </div>
                    <div className="user-text">
                        <h1>{currentUser.name}</h1>
                        <p className="user-bio">{currentUser.bio}</p>
                        <p className="user-email">📧 {currentUser.email}</p>
                    </div>
                    <button className="btn-edit-profile">Chỉnh sửa hồ sơ</button>
                </section>

                <hr className="divider" />

                {/* PHẦN RIÊNG: DASHBOARD THEO ROLE */}
                <section className="role-dashboard">
                    
                    {/* GIAO DIỆN ADMIN */}
                    {currentUser.role === 'admin' && (
                        <div className="admin-panel">
                            <h3>🛠️ Bảng Điều Khiển Quản Trị</h3>
                            <div className="action-grid">
                                <div className="card"><h4>1,240</h4><p>Người dùng</p></div>
                                <div className="card"><h4>85</h4><p>Truyện chờ duyệt</p></div>
                                <div className="card"><h4>12</h4><p>Báo cáo vi phạm</p></div>
                                <div className="card btn-manage">Quản lý hệ thống</div>
                            </div>
                        </div>
                    )}

                    {/* GIAO DIỆN AUTHOR (TÁC GIẢ) */}
                    {currentUser.role === 'author' && (
                        <div className="author-panel">
                            <h3>✍️ Khu Vực Tác Giả</h3>
                            <div className="author-actions">
                                <button className="btn-primary">Đăng truyện mới</button>
                                <button className="btn-outline">Quản lý truyện của tôi</button>
                            </div>
                            <div className="story-stats">
                                <p>Tổng lượt đọc: <strong>15,000</strong></p>
                                <p>Số chương đã đăng: <strong>120</strong></p>
                            </div>
                        </div>
                    )}

                    {/* GIAO DIỆN MEMBER (THÀNH VIÊN) */}
                    {currentUser.role === 'member' && (
                        <div className="member-panel">
                            <h3>📚 Thư Viện Của Tôi</h3>
                            <div className="tabs">
                                <button className="tab active">Truyện đang theo dõi</button>
                                <button className="tab">Lịch sử đọc</button>
                            </div>
                            <div className="book-list">
                                <p>Bạn chưa có truyện nào trong thư viện.</p>
                            </div>
                        </div>
                    )}

                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;