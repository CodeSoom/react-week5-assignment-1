import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadInitialData } from './actions';

// 1. 지역선택
import RegionsContainer from './RegionsContainer';
// 2. 카테고리 선택
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
