import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadCategories, loadRegions } from './actions';

import CategoriesContainer from './CategoriesContainer';
import RegionContainer from './RegionContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <div>
      <RegionContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
