import React from 'react';

import { useSelector } from 'react-redux';

import Buttons from './Buttons';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const handleClick = () => 'hi there';

  return (
    <Buttons
      buttons={categories}
      handleClick={handleClick}
    />
  );
}
