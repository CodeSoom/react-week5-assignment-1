import React from 'react';

export default function Categories({ categories, selectedCatId, onClick }) {
  return ((
    <ul>
      {categories.map((category) => (
        <li
          key={category.id}
        >
          <button
            type="button"
            onClick={() => onClick(category.id)}
          >
            {category.name}
            {selectedCatId === category.id ? '(v)' : ''}
          </button>
        </li>
      ))}
    </ul>
  ));
}
