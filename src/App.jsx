import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegionsContainer from './RegionsContainer';

import {
  setRegions,
  setCategories,
} from './actions';
import { fetchRegions, fetchCategories } from './services/api';
import CategoriesContainer from './CategoriesContainer';

function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export default function App() {
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
