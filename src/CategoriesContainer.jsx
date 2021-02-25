import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setClicked } from './actions';

import Buttons from './Buttons';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(setClicked({ category: event.target.id }));
  };

  return (
    <Buttons
      buttons={categories}
      handleClick={handleClick}
    />
  );
}
