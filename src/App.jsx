import React, { useEffect } from 'react';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  loadCategories,
  loadRegions,
  loadRestaurnats,
} from './actions';

import RegionsContainer from './RegionsContainer';

import RestaurantsContainer from './RestaurantsContainer';

import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const { selected } = useSelector((state) => ({
    selected: state.selected,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    if (selected.region.name && selected.category.id) {
      dispatch(loadRestaurnats({
        region: selected.region.name,
        category: selected.category.id,
      }));
    }
  }, [selected]);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
