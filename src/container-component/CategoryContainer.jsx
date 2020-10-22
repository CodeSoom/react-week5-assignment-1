import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonList from '../presentational-component/ButtonList';

import {
  selectCategory,
} from '../actions';

export default function CategoryContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => ({
    selectedCategory: state.selectedCategory,
    categories: state.categories,
  }));

  function handleClickCategory(id) {
    dispatch(selectCategory(id));
  }

  return (
    <ButtonList
      labels={categories}
      onClick={handleClickCategory}
      selectedId={selectedCategory}
    />
  );
}
