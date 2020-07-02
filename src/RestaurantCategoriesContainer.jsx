import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantCategories from './RestaurantCategories';

import {
  selectCategory,
} from './actions';

export default function RestaurantCategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleClick(event) {
    dispatch(selectCategory(event.target.value));
  }

  return (
    <RestaurantCategories
      categories={categories}
      onClick={handleClick}
    />
  );
}
