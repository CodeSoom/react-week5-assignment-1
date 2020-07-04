import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import { selectCategory, loadRestaurants } from './actions';

export default function CategoriesContainer() {
  const {
    categories, categoryId, regionName,
  } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.categoryId,
    regionName: state.regionName,
  }));

  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectCategory(id));
    dispatch(loadRestaurants({
      regionName,
      categoryId: id,
    }));
  }

  return (
    <Categories
      categories={categories}
      categoryId={categoryId}
      onClick={handleClick}
    />
  );
}
