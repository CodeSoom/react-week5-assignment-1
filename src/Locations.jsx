import React from 'react';

export default function Locations({ locations, onClick, selectedLocationName }) {
  return (
    <ul>
      {locations.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(name)}
          >
            {name}
            {name === selectedLocationName ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
