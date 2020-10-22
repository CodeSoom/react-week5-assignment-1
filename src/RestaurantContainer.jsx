import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantList from './RestaurantList';

const RestaurantContainer = () => {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <RestaurantList restaurants={restaurants} />
  );
};

export default RestaurantContainer;
