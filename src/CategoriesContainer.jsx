import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { updateSelectedCategory } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { selectedCategoryName, categories } = useSelector((state) => ({
    selectedCategoryName: state.selectedCategoryName,
    categories: state.categories,
  }));

  function handleClickCategory(categoryName) {
    dispatch(updateSelectedCategory(categoryName));
  }

  return (
    <Categories
      categories={categories}
      onCick={handleClickCategory}
      selectedcategoryname={selectedCategoryName}
    />
  );
}
