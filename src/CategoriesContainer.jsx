import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import { loadRestaurants, selectCategory } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleclick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              type="button"
              onClick={() => {
                handleclick(category.id);
              }}
            >
              {category.name}
              {selectedCategory ? (
                <>{category.id === selectedCategory.id ? '(V)' : null}</>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
