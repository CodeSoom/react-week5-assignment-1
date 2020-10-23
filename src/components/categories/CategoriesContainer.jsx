import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import {
  loadRestaurants,
  selectCategory,
} from '../../actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryId } = useSelector(({ category }) => ({
    categories: category.categories,
    selectedCategoryId: category.selectedId,
  }));

  const handleClickSelectCategory = (categoryId) => {
    dispatch(selectCategory(categoryId));

    if (selectedCategoryId !== categoryId) {
      dispatch(loadRestaurants());
    }
  };

  return (
    <Categories
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      onClickSelectCategory={handleClickSelectCategory}
    />
  );
}
