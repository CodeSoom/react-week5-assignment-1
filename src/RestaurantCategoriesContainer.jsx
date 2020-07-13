import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantCategories from './RestaurantCategories';

import {
  setCategory,
} from './actions';

export default function RestaurantCategoriesContainer() {
  const dispatch = useDispatch();

  function handleClick(category) {
    dispatch(setCategory(category));
  }

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <RestaurantCategories
      categories={categories}
      onClick={handleClick}
    />
  );
}
