import React from 'react';

import locations from '../fixtures/locations';

export default function Location() {
  return (
    <div>
      <ul>
        {locations.map((location) => (
          <li key={location.id}><button type="button">{location.name}</button></li>
        ))}
      </ul>
    </div>
  );
}
