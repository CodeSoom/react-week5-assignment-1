import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurants } from './actions';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { regionId, categoryId, restaurants } = useSelector((state) => ({
    regionId: state.selectedRegionId,
    categoryId: state.selectedCategoryId,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    if (regionId && categoryId) {
      dispatch(loadRestaurants(regionId, categoryId));
    }
  }, []);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
