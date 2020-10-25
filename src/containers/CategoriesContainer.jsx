import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Category from '../components/Category';

import {
  updateSelectedCategoryId,
  loadRestaurants,
} from '../actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryId } = useSelector((state) => {
    const { category } = state;
    return {
      categories: category.categories,
      selectedCategoryId: category.selectedCategoryId,
    };
  });

  function handleClick(categoryId) {
    dispatch(updateSelectedCategoryId(categoryId));
    dispatch(loadRestaurants());
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
