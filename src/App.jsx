import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import LocationsContainer from './LocationsContainer';

import {
  loadLocations,
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLocations());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <LocationsContainer />
      <CategoriesContainer />
    </div>
  );
}
