import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import CategoriesContainer from './CategoriesContainer';

import {
  loadRegions,
  loadCategories,
} from './actions';

export default function App() {
  const { selected } = useSelector((state) => ({
    selected: state.selected
  }))

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
    </div>
  );
}
