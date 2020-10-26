import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectedCategory,
  loadRestaurants,
} from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectCategory } = useSelector((state) => ({
    categories: state.categories,
    selectCategory: state.selectedCategoryId,
  }));

  const handleClickCategory = (id) => {
    dispatch(selectedCategory(id));
    dispatch(loadRestaurants());
  };

  return (
    <Categories
      categories={categories}
      selectedCategory={selectCategory}
      onClick={handleClickCategory}
    />
  );
}
