import React from 'react';

import RestaurantCategories from './RestaurantCategories';

import { categories } from '../fixtures/restaurants';

export default function RestaurantCategoriesContainer() {
  return (
    <RestaurantCategories categories={categories} />
  );
}
