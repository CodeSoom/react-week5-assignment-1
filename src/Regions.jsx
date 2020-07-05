import React from 'react';

export default function Regions({ regions, selectedRegion, onClick }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button" onClick={() => onClick(region.id)}>
            {region.name}
            {selectedRegion && region.id === selectedRegion.id ? '(V)' : null }
          </button>
        </li>
      ))}
    </ul>
  );
}
