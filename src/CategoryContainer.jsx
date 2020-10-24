import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedButton } from './actions';

import Buttons from './Buttons';

export default function CategoryContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryName } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryName: state.selectedButtons.category.name,
  }));

  function handleClickSelect(event) {
    const buttonText = event.target.textContent;

    if (buttonText.indexOf('(V)') !== -1) {
      return;
    }

    const selectedCategory = categories.filter((category) => category.name === buttonText);

    const selectedButtonValue = {
      type: 'category',
      value: selectedCategory[0],
    };

    dispatch(setSelectedButton(selectedButtonValue));
  }

  return (
    <Buttons
      selectedButton={selectedCategoryName}
      buttonNames={categories}
      onClickSelect={handleClickSelect}
    />
  );
}
