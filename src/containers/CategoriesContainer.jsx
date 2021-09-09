import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';

import {
  clickCategory,
} from '../modules/actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, clickedCategory } = useSelector((state) => ({
    categories: state.categories,
    clickedCategory: state.clickedCategory,
  }));

  function handleClickCategory(id) {
    dispatch(clickCategory(id));
  }

  return (
    <Categories
      categories={categories}
      clickedCategory={clickedCategory}
      onClick={handleClickCategory}
    />
  );
}
