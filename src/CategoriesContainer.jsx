import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  selectCategory,
  getCategories,
} from './modules/actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selected } = useSelector((state) => ({
    categories: state.categories,
    selected: state.selected.category,
  }));

  function handleClick(category) {
    dispatch(selectCategory(category));
    dispatch(getCategories());
  }

  return (
    <>
      <Categories
        categories={categories}
        selected={selected}
        onClick={handleClick}
      />
    </>
  );
}
