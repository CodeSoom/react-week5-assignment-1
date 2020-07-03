import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryList from './CategoryList';

import { selectCategory } from './actions';

export default function CategoryListContainer() {
  const dispatch = useDispatch();

  const { categoryList } = useSelector((state) => ({
    categoryList: state.categoryList,
  }));

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
