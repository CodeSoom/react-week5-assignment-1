import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import {
  loadRestaurants,
} from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { region, category } = useSelector((state) => ({
    region: state.region,
    category: state.category,
  }));

  useEffect(() => {
    dispatch(loadRestaurants(region, category));
  }, []);

  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
