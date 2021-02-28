import React from 'react';

export default function Regions({ regions, selectedRegion, onClick }) {
  return (
    <div>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onClick(id)}
            >
              {name}
              {selectedRegion === id ? '(V)' : ''}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
