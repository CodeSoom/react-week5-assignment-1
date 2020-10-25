import React from 'react';

export default function Buttons({ items, selected, onClick }) {
  return (
    <ul>
      {
        items.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onClick(id)}
            >
              {id === selected ? `${name}(V)` : name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
