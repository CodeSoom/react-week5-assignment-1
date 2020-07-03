import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import {
  setCategories,
} from './actions';

function loadCategories({ dispatch }) {
  const categories = [];
  dispatch(setCategories(categories));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategories({ dispatch });
  }, []);

  return (
    <div>
      <CategoriesContainer />
    </div>
  );
}
