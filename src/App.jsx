import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  const { selectedRegion, selectedCategoryId } = useSelector((state) => ({
    selectedRegion: state.selectedRegion,
    selectedCategoryId: state.selectedCategoryId,
  }));

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    if (selectedCategoryId !== null && selectedRegion !== null) {
      dispatch(loadRestaurants({
        selectedRegion,
        selectedCategoryId,
      }));
    }
  }, [selectedRegion, selectedCategoryId]);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
