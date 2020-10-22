import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import {
  loadRestaurants,
  selectCategory,
} from '../redux/actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const state = useSelector(({ category, region }) => ({
    categories: category.categories,
    selectedCategoryId: category.selectedId,
    selectedRegionName: region.selectedName,
  }));

  const { categories, selectedCategoryId, selectedRegionName } = state;

  const handleClickSelectCategory = (categoryId) => {
    if (selectedRegionName && (selectedCategoryId !== categoryId)) {
      dispatch(loadRestaurants(selectedRegionName, categoryId));
    }
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
