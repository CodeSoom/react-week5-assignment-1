import React from 'react';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      { regions.map(({ id, name }) => (
        <li key={name}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
