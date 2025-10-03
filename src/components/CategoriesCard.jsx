import React from 'react';

const CategoriesCard = () => {
  const categories = [
    { name: 'WEB', count: 13, icon: '🖥️' },
    { name: 'AGROELECTRONICA', count: 8, icon: '🌱' },
    { name: 'ELECTRONICA', count: 21, icon: '🔌' },
    { name: 'DISEÑO', count: 16, icon: '🔨' }
  ];

  return (
    <div className="categories-card">
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-info">
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </div>
            <span className="category-count">{category.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;