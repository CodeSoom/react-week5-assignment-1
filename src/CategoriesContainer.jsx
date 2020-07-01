import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import { selectCategory } from './actions';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
    />
  );
}
