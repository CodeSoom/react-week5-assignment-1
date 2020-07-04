import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionContainer from './RegionContainer';
import CategoriesContainer from './CategoriesContainer';

import {
  loadRegions,
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <RegionContainer />
      <CategoriesContainer />
    </div>
  );
}
