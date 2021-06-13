import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkCategory } from './actions';

import RestaurantCategories from './RestaurantCategories';

export default function RestaurantCategoriesContainer() {
  const dispatch = useDispatch();

  const handleClickCategory = (id) => {
    dispatch(checkCategory(id));
  };

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <RestaurantCategories
      categories={categories}
      onClickCategory={handleClickCategory}
    />
  );
}
