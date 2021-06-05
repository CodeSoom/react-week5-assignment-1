import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantCategories from './RestaurantCategories';

export default function RestaurantCategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <RestaurantCategories
      categories={categories}
      onClickCategory={() => null}
    />
  );
}
