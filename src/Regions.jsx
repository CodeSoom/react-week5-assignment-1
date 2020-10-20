import React from 'react';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      { regions.map(({ name }) => (
        <li key={name}>
          <button
            type="button"
            onClick={onClick}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
