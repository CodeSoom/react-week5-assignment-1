import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeSelectedCategory } from './actions';

import Buttons from './Buttons';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.selectedCategoryId,
  }));

  function handleClick(id) {
    return dispatch(changeSelectedCategory(id));
  }

  return (
    <Buttons
      list={categories}
      selectedId={selectedCategoryId}
      onClick={handleClick}
    />
  );
}
