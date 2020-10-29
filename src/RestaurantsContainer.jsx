import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { loadRestaurants } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const {
    filter: { regionName, categoryId },
    restaurants,
  } = useSelector((state) => ({
    filter: state.filter,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(loadRestaurants({ regionName, categoryId }));
  }, [regionName, categoryId]);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
