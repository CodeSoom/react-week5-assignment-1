import React from 'react';

export default function Regions({ regions, selectedRegion, handleClick }) {
  return (
    <ul>
      {regions.map((region) => (
        <li
          key={region.id}
        >
          <button type="button" onClick={handleClick} value={region.name}>
            {region.name === selectedRegion ? `${region.name}(V)` : region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
