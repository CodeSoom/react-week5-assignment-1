import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import {
  loadRegions, selectCategory, loadRestaurants, loadCategories,
} from './action';

export default function App() {
  const {
    selectedRegion, categories, selectedCategory, restaurants,
  } = useSelector(
    (state) => ({
      selectedRegion: state.selectedRegion,
      categories: state.categories,
      selectedCategory: state.selectedCategory,
      restaurants: state.restaurants,
    }),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  function handleSelectCategory(newSelectedCategory, newSelectedCategoryId) {
    dispatch(selectCategory(newSelectedCategory));
    dispatch(loadRestaurants(selectedRegion, newSelectedCategoryId));
  }

  return (
    <div>
      <RegionsContainer />
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
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
