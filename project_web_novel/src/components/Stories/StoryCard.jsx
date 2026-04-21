import React from 'react';
import '../../styles/StoriesCss/StoryCard.css';

const StoryCard = ({ title, status, image, author, view, chapters, category }) => {
  return (
    <div className="story-card">
      {/* Nhãn trạng thái (Full) */}
      {status === 'Full' && <div className="card-badge">Full</div>}
      
      {/* Hình ảnh truyện */}
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>

      {/* Nội dung thông tin */}
      <div className="card-info">
        <h3 className="card-title" title={title}>{title}</h3>
        <p className="card-author">{author || 'Chưa rõ tác giả'}</p>
        <div className="card-stats">
         <span>Số chương: {chapters}</span> 
         <br/>
         <span>view: {view}</span>
          
        </div>
        <p className="card-category">Thể loại: {category}</p>
      </div>
    </div>
  );
};

export default StoryCard;