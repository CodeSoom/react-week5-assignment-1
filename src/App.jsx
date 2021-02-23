import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegionsContainer from './RegionsContainer';

import {
  setRegions,
} from './actions';
import { fetchRegions } from './services/api';
import CategoriesContainer from './CategoriesContainer';

function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

function loadCategories() {
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
