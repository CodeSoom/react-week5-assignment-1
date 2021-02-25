import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { categorySelect } from './actions';

export default function CategoriesContainer() {
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  function handleCategoryClick(id) {
    dispatch(categorySelect(id));
  }

  return (<Categories categories={categories} onClick={handleCategoryClick} />);
}
