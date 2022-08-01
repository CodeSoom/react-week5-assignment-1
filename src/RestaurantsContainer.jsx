import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from './actions';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { restaurants, regionId, categoryId } = useSelector((state) => ({
    restaurants: state.restaurants,
    categoryId: state.category.id,
    regionId: state.region.name,
  }));

  useEffect(() => {
    if (categoryId && regionId) {
      dispatch(loadRestaurants(regionId, categoryId));
    }
  }, [categoryId, regionId]);

  return <Restaurants restaurants={restaurants} />;
}
