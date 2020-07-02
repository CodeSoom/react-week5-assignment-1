import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCategories from './RestaurantCategories';

import { changeCategory, loadRestaurants } from './actions';

export default function RestaurantCategoriesContainer() {
  const dispatch = useDispatch();

  const {
    categories, category, categoryId, region,
  } = useSelector((selector) => ({
    categories: selector.categories,
    category: selector.category,
    categoryId: selector.categoryId,
    region: selector.region,
  }));

  function handleClick(event) {
    dispatch(changeCategory({ name: event.target.dataset.name, id: event.target.dataset.id }));
    dispatch(loadRestaurants({ region, categoryId }));
  }

  return (
    <>
      <RestaurantCategories
        categories={categories}
        onClick={handleClick}
        selected={category}
      />
    </>
  );
}
