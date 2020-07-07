import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCategories from './RestaurantCategories';

import { changeCategory, loadRestaurants } from './actions';

export default function RestaurantCategoriesContainer() {
  const dispatch = useDispatch();

  const {
    categories, category,
  } = useSelector((state) => ({
    categories: state.categories,
    category: state.category,
  }));

  function handleClick(event) {
    dispatch(changeCategory(categories.find((v) => v.name === event.target.name)));
    dispatch(loadRestaurants());
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
