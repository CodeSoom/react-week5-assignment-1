import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { categorySelect, loadRestaurants } from './actions';

export default function CategoriesContainer() {
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  function handleCategoryClick(id) {
    dispatch(categorySelect(id));
    dispatch(loadRestaurants());
  }

  return (<Categories categories={categories} onClick={handleCategoryClick} />);
}
