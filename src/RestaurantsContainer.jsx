import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import {
  loadRestaurants,
} from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const {
    restaurants, categoryId, regionName, stopLoad,
  } = useSelector((state) => ({
    restaurants: state.restaurants,
    categoryId: state.categoryId,
    regionName: state.regionName,
    stopLoad: state.stopLoad,
  }));

  dispatch(loadRestaurants(categoryId, regionName, stopLoad));

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
