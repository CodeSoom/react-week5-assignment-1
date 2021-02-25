import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantContainer from './RestaurantContainer';

import { loadRegions, loadCategories } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div className="app_container">
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantContainer />
    </div>
  );
}
