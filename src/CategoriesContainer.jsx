import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from './actions';

import Buttons from './Buttons';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  function handleClick(category) {
    dispatch(selectCategory(category));
  }

  return (
    <Buttons
      buttons={categories}
      onClick={handleClick}
      selectedButton={selectedCategory}
    />
  );
}
