import React from 'react';

export default function Categories({ categories, onClick, selectedId }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {`${name}${id === selectedId ? '(V)' : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
