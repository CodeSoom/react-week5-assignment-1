import React from 'react';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      {regions.map(({ id, region, isChecked }) => (
        <li key={id}>
          <button onClick={() => onClick(id, isChecked)} type="button">
            {region && isChecked ? `${region}(V)` : region}
          </button>
        </li>
      ))}
    </ul>
  );
}
