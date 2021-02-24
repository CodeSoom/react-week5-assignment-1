import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

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
      dispatch();
    }
  }, []);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
