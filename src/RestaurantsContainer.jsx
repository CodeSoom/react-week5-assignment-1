import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { loadRestaurants } from './actions';

export default function RestaurantsContainer() {
  const { regionName, categoryId, restaurants } = useSelector((state) => ({
    regionName: state.regionName,
    categoryId: state.categoryId,
    restaurants: state.restaurants,
  }));

  const dispatch = useDispatch();

  // dispatch(loadRestaurants(regionName, categoryId));

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
