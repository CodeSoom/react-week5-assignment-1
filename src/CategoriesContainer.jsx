import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import {
  selectCategory, loadRestaurants,
} from './action';

export default function CategoriesContainer() {
  const {
    selectedRegion, categories, selectedCategory,
  } = useSelector(
    (state) => ({
      selectedRegion: state.selectedRegion,
      categories: state.categories,
      selectedCategory: state.selectedCategory,
    }),
  );

  const dispatch = useDispatch();

  function handleSelectCategory(newSelectedCategory, newSelectedCategoryId) {
    dispatch(selectCategory(newSelectedCategory));
    dispatch(loadRestaurants(selectedRegion, newSelectedCategoryId));
  }

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleSelectCategory(category.name, category.id)}
          type="button"
        >
          {category.name === selectedCategory
            ? `${category.name}(V)`
            : category.name}
        </button>
      ))}
    </div>
  );
}
