import React from 'react';

export default function Categories({ categories, selectCategory, onClick }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {selectCategory === id ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
