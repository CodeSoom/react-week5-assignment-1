import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { updateCategoryId, loadRestaurants } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.categoryId,
  }));

  function handleClick(id) {
    dispatch(updateCategoryId(id));
    dispatch(loadRestaurants());
  }

  return (
    <>
      <Categories
        categories={categories}
        selectCategory={categoryId}
        onClick={handleClick}
      />
    </>
  );
}
