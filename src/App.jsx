import React from 'react';

import Location from './Location';

import categories from '../fixtures/categories';

export default function App() {
  return (
    <div>
      <Location />

      <ul>
        {categories.map((category) => (
          <li key={category.id}><button type="button">{category.name}</button></li>
        ))}
      </ul>
    </div>
  );
}
