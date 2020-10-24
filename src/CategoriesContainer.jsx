import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { selectedCategoryId, categories } = useSelector((state) => ({
    selectedCategoryId: state.selectedCategoryId,
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectCategory(id));
  }

  return (
    <div>
      <h2>Categories</h2>
      <Categories
        selectedCategoryId={selectedCategoryId}
        categories={categories}
        onClick={handleClick}
      />
    </div>
  );
}
