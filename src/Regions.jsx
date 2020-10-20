import React from 'react';

export default function Regions({ regions }) {
  return (
    <ul>
      { regions.map(({ name }) => (
        <li key={name}>
          <button
            type="button"
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
