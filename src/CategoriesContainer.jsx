import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectedCategory,
  loadRestaurants,
} from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.selectedCategoryId,
  }));

  const handleClickCategory = (id) => {
    dispatch(selectedCategory(id));
    dispatch(loadRestaurants());
  };

  return (
    <Categories
      categories={categories}
      selectedCategory={categoryId}
      onClick={handleClickCategory}
    />
  );
}
