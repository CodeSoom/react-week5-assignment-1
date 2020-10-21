import React from 'react';

export default function Regions({ regions, selectedRegionName }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button">
            {name.replace(selectedRegionName, name.concat('(V)'))}
          </button>
        </li>
      ))}
    </ul>
  );
}
