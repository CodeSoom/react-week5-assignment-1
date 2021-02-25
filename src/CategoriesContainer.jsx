import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { updateSelectedCategory } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { selectedcategoryname, categories } = useSelector((state) => ({
    selectedcategoryname: state.selectedcategoryname,
    categories: state.categories,
  }));

  function handleClickCategory(event) {
    const categoryName = event.target.value;
    dispatch(updateSelectedCategory(categoryName));
  }

  return (
    <Categories
      categories={categories}
      onCick={handleClickCategory}
      selectedcategoryname={selectedcategoryname}
    />
  );
}
