import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from './actions';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { regionName, categoryId, restaurants } = useSelector((state) => ({
    regionName: state.regionName,
    categoryId: state.categoryId,
    restaurants: state.restaurants,
  }));

  if (regionName !== undefined || categoryId !== undefined) {
    if (regionName !== '' || categoryId !== 0) {
      dispatch(loadRestaurants(regionName, categoryId));
    }
  }

  return (
    <Restaurants restaurants={restaurants} />
  );
}
