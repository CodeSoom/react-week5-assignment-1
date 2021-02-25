import React from 'react';

export default function Categories({ categories, onClick, selectedCategoryName }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(name)}
          >
            {name}
            {name === selectedCategoryName ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
