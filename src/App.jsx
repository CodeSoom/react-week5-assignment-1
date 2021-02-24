import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import LocationsContainer from './LocationsContainer';

import setLocations from './actions';

import fetchLocations from './services/api';

async function loadLocations({ dispatch }) {
  const locations = await fetchLocations();
  dispatch(setLocations(locations));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadLocations({ dispatch });
  }, []);

  return (
    <div>
      <LocationsContainer />
      <CategoriesContainer />
    </div>
  );
}
