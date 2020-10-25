import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Regions from './Regions';

import CategoriesContainer from './CategoriesContainer';

import {
  loadInitialData,
} from './actions';

function RestaurantsContainer() {
  return null;
}
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <Regions />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
