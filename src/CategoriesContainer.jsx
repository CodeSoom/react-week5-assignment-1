import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';

import { selecteCategory } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  function handleClick(category) {
    dispatch(selecteCategory(category));
  }

  return (
    <Button
      buttons={categories}
      onclick={handleClick}
      selectedButton={selectedCategory}
    />
  );
}
