import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import {
  loadRestaurants,
} from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { currentRegionName, currentCategoryId, restaurants } = useSelector((state) => ({
    curerntRegionName: state.currentRegionName,
    currentCategoryId: state.currentCategoryId,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(loadRestaurants(currentRegionName, currentCategoryId));
  }, []);

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
