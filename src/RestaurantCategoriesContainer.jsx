import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import RestaurantCategories from './RestaurantCategories';

import { checkCategory } from './actions';

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
