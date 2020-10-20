import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurantCategories,
  loadRestaurnats,
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
    dispatch(loadRestaurnats());
  };

  return (
    <ul>
      {categories.map((category) => {
        const { id, name } = category;

        return (
          <li key={id}>
            <button
              type="button"
              name={name}
              onClick={() => handleClick(category)}
            >
              {name}
              {id === selectedCategory.id && '(V)'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
