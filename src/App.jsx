import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { selectedCategory, selectedRegion } = useSelector((state) => ({
    selectedCategory: state.selectedCategory,
    selectedRegion: state.selectedRegion,
  }));

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    if (selectedCategory && selectedRegion) {
      dispatch(loadRestaurants({ selectedCategory, selectedRegion }));
    }
  }, [selectedCategory, selectedRegion]);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
