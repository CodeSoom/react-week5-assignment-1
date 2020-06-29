import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state);

  const onClick = () => {
    dispatch({});
  };
  return <Categories categories={categories} onClick={onClick} />;
}
