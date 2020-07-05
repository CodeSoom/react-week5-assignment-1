import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { setCategory, loadRestaurants } from './actions';

export default function CategoriesContainer() {
  const { regionName, categoryId, categories } = useSelector((state) => ({
    regionName: state.regionName,
    categoryId: state.categoryId,
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  function handleClick(category) {
    dispatch(setCategory(category));
    dispatch(loadRestaurants(regionName, category.id));
  }

  return (
    <Categories
      clickedCategoryId={categoryId}
      categories={categories}
      onClick={handleClick}
    />
  );
}
