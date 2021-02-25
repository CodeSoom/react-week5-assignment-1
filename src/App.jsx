import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantContainer from './RestaurantContainer';

import { fetchRegions, fetchCategories } from './services/api';

import { setRegions, setCategories } from './actions';

async function loadRegions(dispatch) {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
}
async function loadCategories(dispatch) {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions(dispatch);
    loadCategories(dispatch);
  }, []);

  return (
    <div className="app_container">
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantContainer />
    </div>
  );
}
