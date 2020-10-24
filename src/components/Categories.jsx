import React from 'react';

export default function Categories({ regions: categories, selected, onClick }) {
  return (
    <ul>
      {
        categories.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onClick(name)}
            >
              {name === selected ? `${name}(V)` : name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
