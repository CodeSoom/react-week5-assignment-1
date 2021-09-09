import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import {
  setCategories,
} from './actions';

import categories from '../fixtures/categories';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories(categories));
  });
  return (
    <div>
      <CategoriesContainer />
    </div>
  );
}
