import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

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
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());

    dispatch(loadCategories());
  }, []);

  return (
    <>
      <RegionsContainer />
      <ul>
        {categories.map(({
          id, name,
        }) => (
          <li key={id}>
            <button type="button">
              {name}
            </button>
          </li>
        ))}
      </ul>

    </>
  );
}
