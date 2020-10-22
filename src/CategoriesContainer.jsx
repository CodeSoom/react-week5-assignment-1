import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  loadCategories,
  checkedCategory,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.categoryId,
  }));

  function handleClick({ id }) {
    dispatch(checkedCategory({ id }));
  }

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <Categories categories={categories} categoryId={categoryId} onClick={handleClick} />
  );
}
