import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

import {
  loadRegions, loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <RestaurantRegionsContainer />
      <RestaurantCategoriesContainer />
      <ul>
        <li>양천주가</li>
        <li>한국식 초밥</li>
      </ul>
    </>
  );
}
