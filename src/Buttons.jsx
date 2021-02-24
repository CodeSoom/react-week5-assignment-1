import React from 'react';

export default function Buttons({ list, selectedId, onClick }) {
  return (
    <ul>
      {list.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {id === selectedId ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
