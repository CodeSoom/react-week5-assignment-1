import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Restaurants from './Restaurants';
import { loadRestaurants } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { restaurants, region, category } = useSelector((state) => ({
    restaurants: state.restaurants,
    region: state.region,
    category: state.category,
  }));

  useEffect(() => {
    dispatch(loadRestaurants(region.name, category.id));
  });
  return (
    <Restaurants restaurants={restaurants} />
  );
}
