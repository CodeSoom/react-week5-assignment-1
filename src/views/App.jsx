import React, { useEffect } from 'react';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  loadCategories,
  loadRegions,
  loadRestaurnats,
} from '../async_actions';

import {
  RegionsContainer,
  CategoriesContainer,
  RestaurantsContainer,
} from '../components';

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
