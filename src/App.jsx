import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRegions, loadCategories, loadRestaurants } from './actions';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  const { region, category } = useSelector((state) => ({
    region: state.selectedRegion,
    category: state.selectedCategory,
  }));

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    if (region && category) {
      dispatch(loadRestaurants(region.name, category.id));
    }
  }, [region, category]);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
