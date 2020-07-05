import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  updateSelected,
} from './actions';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categoryId } = useSelector(get('selected'));
  const categories = useSelector(get('categories'));

  function handleClick(type, id) {
    dispatch(updateSelected(type, id));
  }

  return (
    <Categories
      selectedCategoryId={categoryId}
      categories={categories}
      onClick={handleClick}
    />
  );
}
