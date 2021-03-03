import React from 'react';

export default function Locations({ locations, onClick, selectedId }) {
  return (
    <ul>
      {locations.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {`${name}${id === selectedId ? '(V)' : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
