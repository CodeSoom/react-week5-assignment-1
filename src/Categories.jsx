import React from 'react';

export default function Categories({ categories, selectedCategoryId, onClick }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button" id={id} onClick={onClick}>
            {name}
            {id === selectedCategoryId && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
