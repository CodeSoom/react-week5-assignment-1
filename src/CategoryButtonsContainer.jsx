import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryButtons from './CategoryButtons';

import {
  setCategory,
} from './actions';

export default function CategoryButtonsContainer() {
  const dispatch = useDispatch();

  const { currentCategory } = useSelector((state) => ({
    currentCategory: state.currentCategory,
  }));

  function handleClick(category) {
    dispatch(setCategory(category));
  }

  const categories = ['한식'];

  return (
    <CategoryButtons
      categories={categories}
      onClick={handleClick}
      currentCategory={currentCategory}
    />
  );
}
