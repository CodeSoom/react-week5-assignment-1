import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import Regions from './Regions';

import {
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  });
  return (
    <div>
      <CategoriesContainer />
      <Regions />
    </div>
  );
}
