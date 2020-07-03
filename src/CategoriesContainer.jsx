import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  updateSelected,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categoryId } = useSelector((state) => ({
    categoryId: state.selected.categoryId,
  }));

  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' },
  ];

  function handleClick(type, id) {
    dispatch(updateSelected(type, id));
  }

  return (
    <Categories
      selected={categoryId}
      categories={categories}
      onClick={handleClick}
    />
  );
}
