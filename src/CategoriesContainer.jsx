import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleClick(id) {
    dispatch({
      type: 'clickCategory',
      payload: {
        id,
      },
    });
  }

  return (
    <Categories categories={categories} onClick={handleClick} />
  );
}
