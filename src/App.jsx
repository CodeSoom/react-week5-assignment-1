import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import CategoriesContainer from './CategoriesContainer';

import RestaurantsContainer from './RestaurantsContainer';

import { setRegions, setCategories } from './actions';

import regions from '../fixtures/regions';

import categories from '../fixtures/categories'

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(regions));
    dispatch(setCategories(categories));
  }, [])
  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
