import React from 'react';
import './StoryCard.css';

const StoryCard = ({ title, status = "Full" }) => {
  return (
    <div className="story-card">
      {status && <div className="card-badge">{status}</div>}
      <div className="card-image">hình ảnh</div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p>account/tên tác giả</p>
        <p>view: 1.2k</p>
        <p>thể loại: Ngôn tình</p>
      </div>
    </div>
  );
};

export default StoryCard;