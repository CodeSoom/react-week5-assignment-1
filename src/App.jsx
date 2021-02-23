import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';

import {
  setRegions,
  setCategories,
} from './actions';

import { fetchRegions, fetchCategories } from './services/api';

function loadRegions() {
  return async (dispatch) => {
    dispatch(setRegions(await fetchRegions()));
  };
}

function loadCategories() {
  return async (dispatch) => {
    dispatch(setCategories(await fetchCategories()));
  };
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());

    dispatch(loadCategories());
  }, []);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
    </>
  );
}
