import React from 'react';

export default function Regions({ regions }) {
  return (
    <ul>
      { regions.map(({ id, name }) => (
        <li>
          <button
            key={id + name}
            type="button"
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
