import React from 'react';

import { regions, categories, restaurants } from '../../fixtures';

export default function App() {
  return (
    <>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button type="button">{region.name}</button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button">{category.name}</button>
          </li>
        ))}
      </ul>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name}
          </li>
        ))}
      </ul>
    </>
  );
}
