import React from 'react';
import { DataCategories } from '../../../model/mockData/DataCategories';

const CategorySidebar = () => {
  return (
    <div className="category-list">
      <h3>Thể loại truyện</h3>
      <ul>
        {DataCategories.map((item) => (
          <li key={item.id}>
            <a href={`/the-loai/${item.slug}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};