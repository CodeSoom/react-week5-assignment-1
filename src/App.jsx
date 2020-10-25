import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Regions from './Regions';

import CategoriesContainer from './CategoriesContainer';

import {
  loadCategories,
} from './actions';

function RestaurantsContainer() {
  return null;
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <Regions />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
