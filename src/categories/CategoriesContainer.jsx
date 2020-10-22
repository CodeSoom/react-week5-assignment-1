import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import { selectCategory } from '../redux/actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryId } = useSelector(({
    restaurantData,
    restaurantSearchQuery,
  }) => ({
    categories: restaurantData.categories,
    selectedCategoryId: restaurantSearchQuery.categoryId,
  }));

  const handleClickSelectCategory = (categoryId) => {
    dispatch(selectCategory(categoryId));
  };

  return (
    <Categories
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      onClickSelectCategory={handleClickSelectCategory}
    />
  );
}
