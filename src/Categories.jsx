import React from 'react';

export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {
        categories.map(({ name }) => (
          <li key={name}>
            <button
              type="button"
              onClick={onClick}
            >
              {name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
