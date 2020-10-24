import React from 'react';

import regions from '../fixtures/regions';

export default function Regions() {
  return (
    <ul>
      {
        regions.map(({ id, name }) => (
          <li key={id}>
            <button type="button">
              {name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
