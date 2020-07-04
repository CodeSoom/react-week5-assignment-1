import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import { selectCategory, loadRestaurants } from './actions';

export default function CategoriesContainer() {
  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.categoryId,
  }));

  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectCategory(id));
    dispatch(loadRestaurants());
  }

  return (
    <Categories
      categories={categories}
      categoryId={categoryId}
      onClick={handleClick}
    />
  );
}
