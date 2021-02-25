import React from 'react';

export default function Categories({ categories, onClick, selectedCategoryName }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => onClick(category.name)}
          >
            {category.name === selectedCategoryName ? `${selectedCategoryName}(V)` : category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
