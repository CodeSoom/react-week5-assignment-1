import React from 'react';

import regions from '../fixtures/regions';

export default function Regions({ regions }) {
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