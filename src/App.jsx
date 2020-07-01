import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import { loadRegions, loadCategories, loadRestaurants } from './actions';

export default function App() {
  const dispatch = useDispatch();
  const { selectedRegion, selectedCategory } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    if (selectedRegion && selectedCategory) {
      dispatch(loadRestaurants());
    }
  }, [selectedRegion, selectedCategory]);

  return (
    <>
      <RegionContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
