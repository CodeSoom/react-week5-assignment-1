import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectedCategory, loadRestaurants } from './actions';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const categories = useSelector(get('categories'));
  const selectCategory = useSelector(get('selectCategory'));
  const handleClick = (regionId) => {
    dispatch(selectedCategory(regionId));
    dispatch(loadRestaurants());
  };

  return (
    <ul>
      {categories && categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {selectCategory && (category.id === selectCategory.id ? '(V)' : null)}
          </button>
        </li>
      ))}
    </ul>
  );
}
