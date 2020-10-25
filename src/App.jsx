import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Regions from './Regions';

import CategoriesContainer from './CategoriesContainer';

import { setCategories } from './actions';

import { fetchCategories } from './services/api';

async function loadCategories({ dispatch }) {
  const categories = await fetchCategories();

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
