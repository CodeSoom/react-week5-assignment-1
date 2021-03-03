import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer() {
  const selectedRegion = useSelector(get('selectedRegion'));
  const selectedCategory = useSelector(get('selectedCategory'));
  const restaurants = useSelector(get('restaurants'));
  return (
    <>
      <ul>
        {selectedCategory && selectedRegion
          ? restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
            </li>
          )) : null}
      </ul>
    </>
  );
}
