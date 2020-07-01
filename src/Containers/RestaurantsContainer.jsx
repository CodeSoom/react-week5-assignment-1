import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Restaurants from '../Components/Restaurants';
import { loadRestaurantsInfo } from '../actions';

export default function RestaurantContainer() {
  const dispatch = useDispatch();
  const { regionName, categoryId } = useSelector((state) => ({
    regionName: state.searchQuery.regionName,
    categoryId: state.searchQuery.categoryId,
  }));
  const restaurants = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(loadRestaurantsInfo({ regionName, categoryId }));
  }, [regionName, categoryId]);

  return <Restaurants restaurants={restaurants} />;
}
