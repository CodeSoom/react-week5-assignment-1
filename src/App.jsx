import React from 'react';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';

export default function App() {
  return (
    <div>
      <ul>
        {locations.map((location) => (
          <li key={location.id}><button type="button">{location.name}</button></li>
        ))}
      </ul>

      <ul>
        {categories.map((category) => (
          <li key={category.id}><button type="button">{category.name}</button></li>
        ))}
      </ul>
    </div>
  );
}
