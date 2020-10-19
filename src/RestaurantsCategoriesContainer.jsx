import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurantCategories } from './actions';

export default function RestaurantsCategoriesContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRestaurantCategories());
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          {category.name}
        </li>
      ))}
    </ul>
  );
}
