import React from 'react';

import Location from './Location';

import locations from '../fixtures/locations';

import categories from '../fixtures/categories';

export default function App() {
  return (
    <div>
      <Location locations={locations} />

      <ul>
        {categories.map((category) => (
          <li key={category.id}><button type="button">{category.name}</button></li>
        ))}
      </ul>
    </div>
  );
}
