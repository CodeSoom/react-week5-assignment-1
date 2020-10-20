import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { selectCategory } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleClickSelectCategory() {
    return dispatch(selectCategory());
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClickSelectCategory}
    />
  );
}
