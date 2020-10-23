import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import CategoriesContainer from './CategoriesContainer';

import RestaurantsContainer from './RestaurantsContainer';

import { setRegions, setCategories } from './actions';

import categories from '../fixtures/categories';

import { fetchRegions } from './services/api';

async function loadRegions({ dispatch }) {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions({ dispatch });
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
