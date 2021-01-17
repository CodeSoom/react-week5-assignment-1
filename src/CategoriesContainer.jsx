import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { loadCategories } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <Categories categories={categories} />
  );
}
