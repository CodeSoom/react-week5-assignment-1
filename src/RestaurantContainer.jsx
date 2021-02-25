import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantConatiner() {
  const restaurants = useSelector((state) => state.restaurants);
  return (
    <Restaurants restaurants={restaurants} />
  );
}
