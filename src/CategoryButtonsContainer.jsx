import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryButtons from './CategoryButtons';

import {
  setCategory,
} from './actions';

export default function CategoryButtonsContainer() {
  const dispatch = useDispatch();

  const { currentCategoryId, categories } = useSelector((state) => ({
    currentCategoryId: state.currentCategoryId,
    categories: state.categories,
  }));

  function handleClick(categoryId) {
    dispatch(setCategory(categoryId));
  }

  return (
    <CategoryButtons
      categories={categories}
      onClick={handleClick}
      currentCategoryId={currentCategoryId}
    />
  );
}
