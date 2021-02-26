import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from '../containers/CategoriesContainer';

import LocationsContainer from '../containers/LocationsContainer';

import RestaurantsContainer from '../containers/RestaurantsContainer';

import {
  loadLocations,
  loadCategories,
  loadRestaurants,
} from '../actions';

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
