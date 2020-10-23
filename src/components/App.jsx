import React from 'react';

import { categories, restaurants } from '../../fixtures';

import RegionsContaioner from '../containers/RegionsContainer';

export default function App() {
  return (
    <>
      <RegionsContaioner />
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
