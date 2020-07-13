import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedCategoryId } from './actions';

import Category from './Category';

export default function CategoryContainer({ category }) {
  const { id, name } = category;

  const dispatch = useDispatch();

  const { selectedCategoryId } = useSelector((state) => ({
    selectedCategoryId: state.selectedCategoryId,
  }));

  function clickHandler() {
    dispatch(setSelectedCategoryId(id));
  }

  function isSelected() {
    if (id === selectedCategoryId) {
      return `${name}(v)`;
    }
    return name;
  }

  const displayName = isSelected();

  return (
    <Category name={displayName} onClick={clickHandler} />
  );
}
