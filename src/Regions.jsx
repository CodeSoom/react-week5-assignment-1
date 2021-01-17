import React from 'react';

export default function Regions({ regions, regionId, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" onClick={() => onClick({ name, id })}>
            {name}
            {id === regionId ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
