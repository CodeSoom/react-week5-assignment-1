import React from 'react';

export default function CategoryList({ categoryList, onClick, selectedCategory }) {
  return (
    <ul>
      {categoryList.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={onClick} id={category.id}>
            {category.name}
            {category.name === selectedCategory ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
