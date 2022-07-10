import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, category } = useSelector((state) => ({
    categories: state.categories,
    category: state.category,
  }));

  function onClickCategory(categoryItem) {
    dispatch(setCategory(categoryItem));
  }

  return (
    <Categories
      category={category}
      categories={categories}
      onClickCategory={onClickCategory}
    />
  );
}
