import React from 'react';

export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button" id={id} onClick={onClick}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
