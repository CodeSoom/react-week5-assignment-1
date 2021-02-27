import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  selectCategory,
} from './actions';

export default function CategoriesContianer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  const handleClickCategory = (category) => {
    dispatch(selectCategory(category));
  };

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onClick={handleClickCategory}
    />
  );
}
