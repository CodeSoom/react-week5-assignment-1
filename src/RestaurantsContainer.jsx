import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from './actions';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { locationName, categoryName, restaurants } = useSelector((state) => ({
    locationName: state.selectedLocationName,
    categoryName: state.selectedCategoryName,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    if (locationName && categoryName) {
      dispatch(loadRestaurants(locationName, categoryName));
    }
  }, [locationName, categoryName]);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
