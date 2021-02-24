import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import LocationsContainer from './LocationsContainer';

import {
  loadLocations,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLocations);
  }, []);

  return (
    <div>
      <LocationsContainer />
      <CategoriesContainer />
    </div>
  );
}
