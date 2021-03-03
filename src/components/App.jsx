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

  const { location, category } = useSelector((state) => ({
    location: state.selectedLocation,
    category: state.selectedCategory,
  }));

  useEffect(() => {
    dispatch(loadLocations());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    if (location.id !== '' && category.id !== '') {
      dispatch(loadRestaurants(location.name, category.id));
    }
  }, [location, category]);

  return (
    <div>
      <LocationsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
