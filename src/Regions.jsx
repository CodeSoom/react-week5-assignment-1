import React from 'react';

export default function Regions({ regions, selectedRegionName, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" onClick={onClick}>
            {name}
            {name === selectedRegionName && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
