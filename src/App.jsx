import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Regions from './Regions';

import CategoriesContainer from './CategoriesContainer';

import { setCategories } from './actions';

import categories from '../fixtures/categories';

function loadCategories({ dispatch }) {
  dispatch(setCategories(categories));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategories({ dispatch });
  }, []);

  return (
    <div>
      <Regions />
      <CategoriesContainer />
    </div>
  );
}
