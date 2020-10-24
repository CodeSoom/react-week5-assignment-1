import React from 'react';

export default function Regions() {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type='button'>{region.name}</button>
        </li>
      ))}
    </ul>
  );
}