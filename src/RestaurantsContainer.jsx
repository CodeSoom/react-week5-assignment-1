import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import {
  loadRestaurants,
} from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { currentRegion, currentCategoryId, restaurants } = useSelector((state) => ({
    currentRegion: state.currentRegion,
    currentCategoryId: state.currentCategoryId,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(loadRestaurants(currentRegion, currentCategoryId));
  }, [currentRegion, currentCategoryId]);

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
