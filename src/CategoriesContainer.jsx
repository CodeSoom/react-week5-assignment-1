import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { updateCategoryId } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleClick(id) {
    dispatch(updateCategoryId(id));
  }

  return (
    <>
      <Categories
        categories={categories}
        onClick={handleClick}
      />
    </>
  );
}
