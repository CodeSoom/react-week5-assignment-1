import React from 'react';

export default function RegionList() {
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
