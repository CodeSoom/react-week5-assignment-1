import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadCategories, loadRegions, loadRestaurnats } from './actions';

import RegionsContainer from './RegionsContainer';

import RestaurantsContainer from './RestaurantsContainer';

import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const { clicked } = useSelector((state) => ({
    clicked: state.clicked,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    dispatch(loadRestaurnats({
      region: clicked.region.name,
      category: clicked.category.id,
    }));
  }, [clicked]);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
