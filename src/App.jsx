import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { loadRegions, selectCategory, loadRestaurants } from './action';

const categories = [
  { id: 1, name: '한식' },
  { id: 2, name: '중식' },
  { id: 3, name: '일식' },
  { id: 4, name: '양식' },
  { id: 5, name: '분식' },
];

export default function App() {
  const { selectedRegion, selectedCategory, restaurants } = useSelector(
    (state) => ({
      selectedRegion: state.selectedRegion,
      selectedCategory: state.selectedCategory,
      restaurants: state.restaurants,
    }),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
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
