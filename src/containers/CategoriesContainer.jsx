import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Category from '../components/Category';

import { updateSelectedCategoryId } from '../actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryId } = useSelector((state) => {
    const { category } = state;
    return {
      categories: category.categories,
      selectedCategoryId: category.category,
    };
  });

  function handleClick(categoryId) {
    dispatch(updateSelectedCategoryId(categoryId));
  }

  function isSelected(categoryId) {
    return categoryId === selectedCategoryId;
  }

  return (
    <ul>
      {categories.map((category) => (
        <Category
          key={category.id}
          isSelected={() => isSelected(category.id)}
          name={category.name}
          onClick={() => handleClick(category.id)}
        />
      ))}
    </ul>
  );
}
