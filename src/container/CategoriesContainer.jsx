import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import { updateCategory } from '../modules/actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selected } = useSelector((state) => ({
    categories: state.categories,
    selected: state.selected.category,
  }));

  function handleClickCategories(category) {
    dispatch(updateCategory(category));
  }

  return (
    <Categories
      categories={categories}
      selected={selected}
      onClick={handleClickCategories}
    />
  );
}
