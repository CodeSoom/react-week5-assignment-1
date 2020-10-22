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

  if (categoryId !== 0 && regionName !== '' && stopLoad === 1) {
    dispatch(loadRestaurants(categoryId, regionName));
  }

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
