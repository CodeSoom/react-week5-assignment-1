import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';
import { setSelectedCategory } from './actions';

export default function CategoryContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));

  const handleCategoryClick = (name) => {
    dispatch(setSelectedCategory(name));
  };

  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button" onClick={() => handleCategoryClick(category.name)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
