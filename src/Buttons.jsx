import React from 'react';

export default function Buttons({ list, selectedID, onClick }) {
  return (
    <ul>
      {list.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {id === selectedID ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
