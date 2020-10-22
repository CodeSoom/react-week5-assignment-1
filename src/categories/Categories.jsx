import React from 'react';
import CategoryItem from './CategoryItem';

export default function Categories({ categories, selectedCategoryId, onClickSelectCategory }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <CategoryItem
          key={id}
          categoryName={name}
          isSelected={id === selectedCategoryId}
          onClick={() => onClickSelectCategory(id)}
        />
      ))}
    </ul>
  );
}
