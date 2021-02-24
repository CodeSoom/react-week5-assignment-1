import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadCategories, loadRegions } from './actions';

import RegionsContainer from './RegionsContainer';

import RestaurantsContainer from './RestaurantsContainer';

import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
