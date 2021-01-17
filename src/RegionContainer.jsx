import React from 'react';

export default function RegionContainer() {
  const regions = [];

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
