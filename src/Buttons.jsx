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
            {name}
            {id === selectedId ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
