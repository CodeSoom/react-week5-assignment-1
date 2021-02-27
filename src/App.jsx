import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContianer from './RegionsContainer';
import CategoriesContianer from './CategoriesContainer';

import {
  loadDefaultData,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDefaultData());
  }, []);

  return (
    <div>
      <h1>Restaurant List</h1>
      <RegionsContianer />
      <CategoriesContianer />
    </div>
  );
}
