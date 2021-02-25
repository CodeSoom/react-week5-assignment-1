import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurants } from './actions';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { region, category, restaurants } = useSelector((state) => ({
    region: state.selectedRegion,
    category: state.selectedCategory,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    if (region && category) {
      dispatch(loadRestaurants(region.name, category.id));
    }
  }, [region, category]);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
