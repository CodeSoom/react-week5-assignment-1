import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';

import { updateSelectedCategory } from '../actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { selectedCategory, categories } = useSelector((state) => ({
    selectedCategory: state.selectedCategory,
    categories: state.categories,
  }));

  function handleClickCategory(categoryId) {
    const category = categories.find(({ id }) => id === categoryId);
    return dispatch(updateSelectedCategory(category));
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClickCategory}
      selectedId={selectedCategory.id}
    />
  );
}
