import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import CategoriesContainer from './CategoriesContainer';

import RestaurantsContainer from './RestaurantsContainer';

import { loadRegions, setCategories } from './actions';

import categories from '../fixtures/categories';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(setCategories(categories));
  }, []);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
