import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedButton } from './actions';

import Buttons from './Buttons';

export default function CategoryContainer() {

  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedButtons.category,
  }));

  function handleClickSelect(event) {
    const selectedButtonValue = {
      type: event.target.name,
      value: event.target.textContent,
    };

    dispatch(setSelectedButton(selectedButtonValue));
  }

  return (
    <Buttons
      type="category"
      selectedButton={selectedCategory}
      buttonNames={categories}
      onClickSelect={handleClickSelect}
    />
  );
}
