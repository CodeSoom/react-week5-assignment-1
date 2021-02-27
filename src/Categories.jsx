import React from 'react';

export default function Categories({ categories, selectedCategory, onClick }) {
  return (
    <div>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onClick(name)}
            >
              {name}
              {selectedCategory === name ? '(V)' : ''}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
