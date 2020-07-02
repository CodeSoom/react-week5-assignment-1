import React from 'react';

import { useSelector } from 'react-redux';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector(
    (state) => ({
      selectedRegion: state.selectedRegion,
      selectedCategory: state.selectedCategory,
      restaurants: state.restaurants,
    }),
  );

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
}
