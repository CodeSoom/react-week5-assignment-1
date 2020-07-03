import React from 'react';

import { useDispatch } from 'react-redux';

import CategoryList from './CategoryList';

import { categoryList } from '../__fixture__/restaurants';
import { selectCategory } from './actions';

export default function CategoryListContainer() {
  const dispatch = useDispatch();

  function handleClick(event) {
    const { target: { id } } = event;
    dispatch(selectCategory(Number(id)));
  }

  return (
    <CategoryList
      categoryList={categoryList}
      onClick={handleClick}
    />
  );
}
