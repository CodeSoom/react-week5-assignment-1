import React from 'react';

import CategoryButton from './CategoryButton';

export default function CategoryButtons({ categories, onClick, currentCategory }) {
  return (
    <ul>
      { categories.map((category, index) => (
        <CategoryButton
          key={index.toString()}
          name={category}
          onClick={onClick}
          currentCategory={currentCategory}
        />
      ))}
    </ul>
  );
}
