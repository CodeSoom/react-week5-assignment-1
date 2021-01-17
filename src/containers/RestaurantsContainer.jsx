import React from 'react';

import { useSelector } from 'react-redux';

import Restaurant from '../components/Restaurant';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurant.restaurants,
  }));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          name={restaurant.name}
        />
      ))}
    </ul>
  );
}
