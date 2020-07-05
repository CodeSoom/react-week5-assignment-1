import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  updateSelected,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categoryId, categories } = useSelector((state) => ({
    categoryId: state.selected.categoryId,
    categories: state.categories,
  }));

  function handleClick(type, id) {
    dispatch(updateSelected(type, id));
  }

  return (
    <Categories
      selectedCategoryId={categoryId}
      categories={categories}
      onClick={handleClick}
    />
  );
}
