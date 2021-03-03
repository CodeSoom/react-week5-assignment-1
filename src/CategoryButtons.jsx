import React from 'react';

import CategoryButton from './CategoryButton';

export default function CategoryButtons({ categories, onClick, currentCategoryId }) {
  return (
    <ul>
      { categories.map((category) => (
        <CategoryButton
          key={category.id}
          name={category.name}
          onClick={() => onClick(category.id)}
          selected={currentCategoryId === category.id}
        />
      ))}
    </ul>
  );
}
