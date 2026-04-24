import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header'; 
import Footer from '../components/Layout/Footer'; 
import StoryCard from '../components/Stories/StoryCard';
import { DataStories } from '../../model/mockData/DataStories';
import '../styles/PageCss/Home.css';

const HomePage = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null); // Mặc định là null
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Kiểm tra xem có User trong localStorage không
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }

    // 2. Fetch dữ liệu truyện
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await new Promise((resolve) => {
          setTimeout(() => resolve({ data: DataStories }), 500);
        });
        setStories(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleProfileClick = () => {
    // Chuyển hướng sang trang Profile
    navigate('/profile'); 
  };

  return (
    <div className="page-wrapper">
      <Header />

      {/* CHỈ XUẤT HIỆN KHI currentUser KHÁC NULL */}
      {currentUser && (
        <div className="user-account-bar" onClick={handleProfileClick}>
          <div className="user-info-mini">
            <img src={currentUser.avatar} alt="avatar" className="mini-avatar" />
            <div className="user-text-wrapper">
              <span className="welcome-text">Chào mừng,</span>
              <span className="user-display-name">{currentUser.name}</span>
              <span className={`mini-badge ${currentUser.role}`}>
                {currentUser.role.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}

      <main className="container-new-stories">
        <h2 className="page-title">Truyện Đề Cử</h2>
        
        {loading ? (
          <div className="loading">Đang tải truyện...</div>
        ) : (
          <div className="story-grid">
            {stories.map(story => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>
        )}

        <div className="pagination">
          <span className="arrow">←</span>
          <span className="page-num active">1</span>
          <span className="page-num">2</span>
          <span className="page-num">3</span>
          <span className="dots">...</span>
          <span className="page-num">12</span>
          <span className="arrow">→</span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;