import React from 'react';

export default function Regions({ regions, selectedRegionID, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {id === selectedRegionID ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
