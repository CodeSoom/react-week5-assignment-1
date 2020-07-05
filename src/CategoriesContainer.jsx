import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { setCategory } from './actions';

export default function CategoriesContainer() {
  const { categoryId, categories } = useSelector((state) => ({
    categoryId: state.categoryId,
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  function handleClick(category) {
    dispatch(setCategory(category));
  }

  return (
    <Categories
      clickedCategoryId={categoryId}
      categories={categories}
      onClick={handleClick}
    />
  );
}
