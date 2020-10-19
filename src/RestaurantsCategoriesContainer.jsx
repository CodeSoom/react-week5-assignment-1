import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurantCategories } from './actions';

export default function RestaurantsCategoriesContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRestaurantCategories());
  }, []);

  const handleClick = () => {
    dispatch();
  };

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            name={category.name}
            onClick={handleClick}
          >
            {category.name}
          </button>
          {category.name}
        </li>
      ))}
    </ul>
  );
}
