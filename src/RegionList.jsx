import React from 'react';

export default function RegionList({ regions, selectedRegionID, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" onClick={onClick}>
            {id === selectedRegionID ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
