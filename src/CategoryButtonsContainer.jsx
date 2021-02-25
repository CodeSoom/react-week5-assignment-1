import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryButtons from './CategoryButtons';

import {
  setCategory,
} from './actions';

import categories from './__fixture__/categories';

export default function CategoryButtonsContainer() {
  const dispatch = useDispatch();

  const { currentCategory } = useSelector((state) => ({
    currentCategory: state.currentCategory,
  }));

  function handleClick(category) {
    dispatch(setCategory(category));
  }

  return (
    <CategoryButtons
      categories={categories}
      onClick={handleClick}
      currentCategory={currentCategory}
    />
  );
}
