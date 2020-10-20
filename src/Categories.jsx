import React from 'react';

export default function Categories({ categories }) {
  return (
    <ul>
      {
        categories.map(({ name }) => (
          <li key={name}>
            <button type="button">
              {name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
