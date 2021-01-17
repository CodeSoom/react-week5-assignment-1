import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import {
  loadRestaurants,
} from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const {
    restaurants, categoryId, regionName, stopFetch,
  } = useSelector((state) => ({
    restaurants: state.restaurants,
    categoryId: state.categoryId,
    regionName: state.selectedRegion.regionName,
    stopFetch: state.stopFetch,
  }));

  dispatch(loadRestaurants({ categoryId, regionName, stopFetch }));

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
