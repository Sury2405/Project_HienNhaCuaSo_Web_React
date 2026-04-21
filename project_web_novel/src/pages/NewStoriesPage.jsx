import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import StoryCard from '../components/StoryCard';
import { DataStories } from '../mockData/DataStories';
import '../styles/NewStoriesPage.css';

const NewStoriesPage = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  return (
    <div className="page-wrapper">
      {/* PHẦN 1: HEADER */}
      <Header />

      {/* PHẦN 2: CENTER (Nội dung chính) */}
      <main className="container-new-stories">
        <h2 className="page-title">Truyện mới nhất</h2>
        
        {loading ? (
          <div className="loading">Đang tải truyện...</div>
        ) : (
          <div className="story-grid">
            {stories.map(story => (
              <StoryCard 
                key={story.id} 
                title={story.title} 
                status={story.status}
                image={story.image}
                author={story.author}
                view={story.view}
                chapters={story.chapters}
                category={story.category}
              />
            ))}
          </div>
        )}

        {/* Phần Phân Trang */}
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

      {/* PHẦN 3: FOOTER */}
      <Footer />
    </div>
  );
};

export default NewStoriesPage;