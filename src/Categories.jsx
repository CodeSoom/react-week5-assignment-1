import React from 'react';

export default function Categories({ categories, categoryId, onClick }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button" onClick={() => onClick({ id })}>
            {name}
            {categoryId === id ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
