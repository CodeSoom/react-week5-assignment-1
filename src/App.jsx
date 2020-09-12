import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import CategoryListContainer from './CategoryListContainer';

import RestaurantsContainer from './RestaurantsContainer';

import { loadRegions, loadCategoryList } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategoryList());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoryListContainer />
      <RestaurantsContainer />
    </div>
  );
}
