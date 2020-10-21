import React from 'react';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name, isChecked }) => (
        <li key={id}>
          <button type="button" onClick={() => onClick(id, isChecked)}>
            {name && isChecked ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
