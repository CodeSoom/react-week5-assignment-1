import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import LocationsContainer from './LocationsContainer';

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

  useEffect(() => {
    if (locationName && categoryName) {
      dispatch(loadRestaurants(locationName, categoryName));
    }
  }, [locationName, categoryName]);

  return (
    <div>
      <LocationsContainer />
      <CategoriesContainer />
    </div>
  );
}
