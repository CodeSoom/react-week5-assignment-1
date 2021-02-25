import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import LocationsContainer from './LocationsContainer';

import RestaurantsContainer from './RestaurantsContainer';

import {
  loadLocations,
  loadCategories,
  loadRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { locationName, categoryName } = useSelector((state) => ({
    locationName: state.selectedLocationName,
    categoryName: state.selectedCategoryName,
  }));

  useEffect(() => {
    dispatch(loadLocations());
    dispatch(loadCategories());
  }, []);

  if (locationName && categoryName) {
    useEffect(() => {
      dispatch(loadRestaurants(locationName, categoryName));
    }, [locationName, categoryName]);
  }

  return (
    <div>
      <LocationsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
