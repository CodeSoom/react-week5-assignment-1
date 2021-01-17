import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { updateCategoryId, loadRestaurants } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { categories, selectCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectCategoryId: state.selectCategoryId,
  }));

  function handleClick(id) {
    dispatch(updateCategoryId(id));
    dispatch(loadRestaurants());
  }

  return (
    <Categories
      categories={categories}
      selectCategory={selectCategoryId}
      onClick={handleClick}
    />
  );
}
