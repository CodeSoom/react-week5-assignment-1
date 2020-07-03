import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';

import { setCategory } from './actions';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  function handleClickChooseCategory(category) {
    dispatch(setCategory(category));
  }

  return (
    <Buttons
      values={categories}
      onClick={handleClickChooseCategory}
    />
  );
}
