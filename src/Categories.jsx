import React from 'react';

export default function Categories({ categories, category, onClickCategory }) {
  return (
    <ul>
      {categories?.map((categoryItem) => (
        <li key={categoryItem.id}>
          <button type="button" onClick={() => onClickCategory(categoryItem)}>
            {categoryItem.name}
            {category && categoryItem.id === category.id && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
