import React from 'react';

import Regions from './Regions';
import categories from './fixtures/categories';

export default function App() {
  return (
    <div>
      <h1>Restaurant List</h1>
      <Regions />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button">
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
