import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleClickSelectCategory() {
    return dispatch();
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClickSelectCategory}
    />
  );
}
