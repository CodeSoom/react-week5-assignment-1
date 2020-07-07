import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { selectCategory, loadRestaurants } from './action';

export default function CategoriesContainer() {
  const { categories, selectedCategory } = useSelector(
    (state) => ({
      categories: state.categories,
      selectedCategory: state.selectedCategory,
    }),
  );

  const dispatch = useDispatch();

  function handleSelectCategory(category) {
    dispatch(selectCategory(category));
    dispatch(loadRestaurants());
  }

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={handleSelectCategory}
    />
  );
}
