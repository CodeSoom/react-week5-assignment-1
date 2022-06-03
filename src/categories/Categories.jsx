import React from 'react';

export default function Categories({ categories, handleClick, categoryId }) {
  const displayChecked = (id) => {
    if (id === categoryId) {
      return '(V)';
    }
    return '';
  };

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={() => handleClick(category.id)}>
            {category.name}
            {displayChecked(category.id)}
          </button>
        </li>
      ))}
    </ul>
  );
}
