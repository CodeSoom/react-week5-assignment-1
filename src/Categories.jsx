import React from 'react';

export default function Categories({ clickedCategoryId, categories, onClick }) {
  function getClickedMarkIfClicked(id) {
    if (id === clickedCategoryId) {
      return '(V)';
    }

    return '';
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={() => onClick(category)}>
            {category.name}
            {getClickedMarkIfClicked(category.id)}
          </button>
        </li>
      ))}
    </ul>
  );
}