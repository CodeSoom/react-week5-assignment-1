import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import CategoriesContainer from './CategoriesContainer';

import {
  chooseRegions,
  loadRegions,
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
    // dispatch(chooseRegions(regions))
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
    </div>
  );
}
