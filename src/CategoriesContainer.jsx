import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

export default function App() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleClick(id, isChecked) {
    dispatch();
  }

  return (
    <Categories categories={categories} onClick={handleClick} />
  );
}
