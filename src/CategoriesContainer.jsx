import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeSelectedCategory } from './actions';

import Buttons from './Buttons';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCategoryID } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryID: state.selectedCategoryID,
  }));

  function handleClick(id) {
    return dispatch(changeSelectedCategory(id));
  }

  return (
    <Buttons
      list={categories}
      selectedID={selectedCategoryID}
      onClick={handleClick}
    />
  );
}
