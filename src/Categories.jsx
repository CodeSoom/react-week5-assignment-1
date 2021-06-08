import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';

import {
  selecteCategory,
} from './actions';

export default function Categories({ categories }) {
  const dispatch = useDispatch();

  const { selectedCategory } = useSelector((state) => ({
    selectedCategory: state.selectedCategory,
  }));

  function handleClick(category) {
    dispatch(selecteCategory(category));
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Button
            item={category}
            onclick={handleClick}
            selectedButton={selectedCategory}
          />
        </li>
      ))}
    </ul>
  );
}
