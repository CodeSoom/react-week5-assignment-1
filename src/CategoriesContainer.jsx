import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { selectCategory, loadRestaurants } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  function handleClickCategory(id) {
    loadRestaurants();
    return dispatch(selectCategory(id));
  }

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onClick={handleClickCategory}
    />
  );
}
