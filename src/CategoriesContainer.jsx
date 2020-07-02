import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { selectCategory, loadRestaurants } from './action';

export default function CategoriesContainer() {
  const { selectedRegion, categories, selectedCategory } = useSelector(
    (state) => ({
      selectedRegion: state.selectedRegion,
      categories: state.categories,
      selectedCategory: state.selectedCategory,
    }),
  );

  const dispatch = useDispatch();

  function handleSelectCategory(newSelectedCategory, newSelectedCategoryId) {
    dispatch(selectCategory(newSelectedCategory));
    dispatch(loadRestaurants(selectedRegion, newSelectedCategoryId));
  }

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={handleSelectCategory}
    />
  );
}
