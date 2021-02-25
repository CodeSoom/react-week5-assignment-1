import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantContainer from './RestaurantContainer';

import { fetchRegions, fetchCategories } from './services/api';

import { setRegions, setCategories, loadRestaurants } from './actions';

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
  const { regionName, categoryId } = useSelector((state) => ({
    regionName: state.regionName,
    categoryId: state.categoryId,
  }));

  if ((regionName !== '') && (categoryId !== '')) {
    dispatch(loadRestaurants(regionName, categoryId));
  }

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
