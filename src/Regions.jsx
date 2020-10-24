import React from 'react';

export default function Regions({ regions, selectRegion, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(name)}
          >
            {selectRegion === name ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
