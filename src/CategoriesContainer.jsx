import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectCategory, loadRestaurants } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, selectedCategory, selectedRegion } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
    selectedRegion: state.selectedRegion,
  }));

  const dispatch = useDispatch();

  function handleClick(e) {
    const { id, value } = e.target;
    dispatch(selectCategory(value));
    dispatch(loadRestaurants(selectedRegion, id));
  }

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      handleClick={handleClick}
    />
  );
}
