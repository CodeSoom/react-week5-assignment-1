import React from 'react';

import CategoryButton from './CategoryButton';

export default function CategoryButtons({ categories, onClick, currentCategory }) {
  return (
    <ul>
      { categories.map((category) => (
        <CategoryButton
          key={category.id}
          name={category.name}
          onClick={onClick}
          currentCategory={currentCategory}
        />
      ))}
    </ul>
  );
}
