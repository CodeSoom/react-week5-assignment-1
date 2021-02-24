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

  const { selectCategoryId, selectRegionId } = useSelector((state) => ({
    selectCategoryId: state.selectCategoryId,
    selectRegionId: state.selectRegionId,
  }));

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    if (selectCategoryId && selectRegionId) {
      dispatch(loadRestaurants({ selectCategoryId, selectRegionId }));
    }
  }, [selectCategoryId, selectRegionId]);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
