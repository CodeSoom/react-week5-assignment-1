import React from 'react';

export default function RegionList({ regions }) {
  return (
    <li>
      { regions.map(({ id, name }) => (
        <button
          type="button"
          key={id}
        >
          {name}
        </button>
      ))}
    </li>
  );
}
