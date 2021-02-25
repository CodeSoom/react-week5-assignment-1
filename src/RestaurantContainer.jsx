import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Restaurants from './Restaurants';

import { fetchRestaurants } from './services/api';

import { setRestaurants } from './actions';

async function loadRestaurants(dispatch, regionName, categoryId) {
  const restaurants = await fetchRestaurants(regionName, categoryId);
  // console.log(restaurants);
  dispatch(setRestaurants(restaurants));
}

export default function RestaurantConatiner() {
  const { regionName, categoryId } = useSelector((state) => ({
    regionName: state.regionName,
    categoryId: state.categoryId,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    loadRestaurants(dispatch, regionName, categoryId);
  }, [regionName, categoryId]);

  const restaurants = useSelector((state) => state.restaurants);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
