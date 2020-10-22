import React from 'react';

export default function Regions({ regions, selectedRegionName, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => {
        const value = (name === selectedRegionName) ? `${name}(V)` : name;

        return (
          <li key={id}>
            <button type="button" onClick={onClick}>
              {value}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
