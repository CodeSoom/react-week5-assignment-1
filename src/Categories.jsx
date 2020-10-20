import React from 'react';

export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {
        categories.map(({ id, name }) => (
          <li key={name}>
            <button
              type="button"
              onClick={onClick(id)}
            >
              {name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
