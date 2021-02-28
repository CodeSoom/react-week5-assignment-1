import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeSelectedCategory } from './actions';

import Buttons from './Buttons';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  function handleClick(categoryId) {
    const category = categories.find(({ id }) => id === categoryId);

    return dispatch(changeSelectedCategory(category));
  }

  return (
    <Buttons
      list={categories}
      selectedId={selectedCategory?.id}
      onClick={handleClick}
    />
  );
}
