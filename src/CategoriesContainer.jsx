import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateCategories, getRestaurants } from './actions';

import ButtonList from './ButtonList';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const handleClickCategory = (id) => {
    dispatch(updateCategories(id));
    dispatch(getRestaurants());
  };

  return (
    <ButtonList
      elements={categories}
      onClick={handleClickCategory}
    />
  );
}
