import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import {
  loadRestaurants,
} from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { region, category, restaurants } = useSelector((state) => ({
    region: state.region,
    category: state.category,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(loadRestaurants(region, category));
  }, []);

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
