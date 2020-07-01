import React from 'react';

import { useDispatch } from 'react-redux';

import { setSelectedCategoryId } from './actions';

import Category from './Category';

export default function CategoryContainer({ category }) {
  const { id, name } = category;

  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(setSelectedCategoryId(id));
  }

  return (
    <Category name={name} onClick={clickHandler} />
  );
}
