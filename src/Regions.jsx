import React from 'react';

export default function Regions({ regions, regionName, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" onClick={() => onClick({ name })}>
            {name}
            {name === regionName ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
