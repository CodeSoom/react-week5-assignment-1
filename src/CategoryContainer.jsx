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

    if (buttonText.includes('(V)')) {
      return;
    }

    const selectedCategory = categories.filter((category) => category.name === buttonText)[0];

    dispatch(setSelectedButton({ type: 'category', value: selectedCategory }));
  }

  return (
    <Buttons
      selectedButton={selectedCategoryName}
      buttons={categories}
      onClickSelect={handleClickSelect}
    />
  );
}
