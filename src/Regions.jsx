import React from 'react';

export default function Regions({ regions, selectedRegionId, onClick }) {
  return ((
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => onClick(region.id)}
          >
            {region.name}
            {selectedRegionId === region.id ? '(v)' : ''}
          </button>
        </li>
      ))}
    </ul>
  ));
}
