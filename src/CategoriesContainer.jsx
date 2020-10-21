import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  checkCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleClick(id, isChecked) {
    dispatch(checkCategories({ id, isChecked }));

    dispatch({
      type: 'initializeCheckedItem',
      payload: { id },
    });
  }

  return (
    <Categories categories={categories} onClick={handleClick} />
  );
}
