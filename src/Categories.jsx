import React from 'react';

export default function Categories({ categories, selectedCategory, handleClick }) {
  return (
    <ul>
      {categories.map((category) => (
        <li
          key={category.id}
        >
          <button type="button" onClick={() => handleClick(category.id)} value={category.name}>
            {category.name === selectedCategory ? `${category.name}(V)` : category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
