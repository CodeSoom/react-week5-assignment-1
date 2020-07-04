import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectCategory } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  const dispatch = useDispatch();

  function handleClick(e) {
    const { value } = e.target;
    dispatch(selectCategory(value));
  }

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      handleClick={handleClick}
    />
  );
}
