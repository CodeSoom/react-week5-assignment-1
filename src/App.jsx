import React from 'react';

import regions from './fixtures/regions';

export default function App() {
  return (
    <div>
      <h1>Restaurant List</h1>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button type="button">
              {region.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
