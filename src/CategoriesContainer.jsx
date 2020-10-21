import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { selectCategory, setRestaurants } from './actions';

import restaurants from '../__fixtures__/restaurants';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleClickSelectCategory(id) {
    dispatch(setRestaurants(restaurants));

    return dispatch(selectCategory(id));
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClickSelectCategory}
    />
  );
}
