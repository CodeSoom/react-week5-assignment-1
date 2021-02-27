import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  selectCategories,
} from './actions';

export default function CategoriesContianer() {
  const dispatch = useDispatch();

  const { categories, selectedCategories } = useSelector((state) => ({
    categories: state.categories,
    selectedCategories: state.selectedCategories,
  }));

  const handleClickRegion = (region) => {
    dispatch(selectCategories(region));
  };

  return (
    <Categories
      categories={categories}
      selectedCategories={selectedCategories}
      onClick={handleClickRegion}
    />
  );
}
