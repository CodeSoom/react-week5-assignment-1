import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';

import { setCategory } from './actions';

export default function RegionsContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  function handleClickChooseCategory(categoryId) {
    dispatch(setCategory(categoryId));
  }

  return (
    <Buttons
      values={categories}
      onClick={handleClickChooseCategory}
    />
  );
}
