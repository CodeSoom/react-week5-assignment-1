import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';
import Loading from '../Loading';

export default function RestaurantsContainer() {
  const { loading, restaurants } = useSelector((({ restaurant }) => ({
    restaurants: restaurant.restaurants,
    loading: restaurant.loading,
  })));

  if (loading) {
    return (
      <Loading />
    );
  }

  console.log(restaurants);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
