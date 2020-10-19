import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurantCategories,
  setRestaurantCategory,
} from './actions';

export default function RestaurantsCategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRestaurantCategories());
  }, []);

  const handleClick = (category) => {
    dispatch(setRestaurantCategory(category));
  };

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            name={category.name}
            onClick={() => handleClick(category)}
          >
            {category.name}
            {category.id === selectedCategory.id && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
