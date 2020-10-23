import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { selectCategory, loadRestaurants } from './actions';

export default function CategoriesContainer() {
  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.selectedCategoryId,
  }));

  const dispatch = useDispatch();

  function handleClick(event) {
    const categoryId = Number(event.target.id);

    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <Categories
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      onClick={handleClick}
    />
  );
}
