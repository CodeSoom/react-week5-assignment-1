import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { setSelectedCategory } from './actions';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  function handleClick(event) {
    dispatch(setSelectedCategory(event.target.id));
  }

  return (
    <Categories categories={categories} onClick={handleClick} />
  );
}
