import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { categorySelect, loadRestaurants } from './actions';

export default function CategoriesContainer() {
  const { categories, regionName } = useSelector((state) => ({
    categories: state.categories,
    regionName: state.regionName,
  }));

  const dispatch = useDispatch();

  function handleCategoryClick(id) {
    dispatch(categorySelect(id));
    dispatch(loadRestaurants(regionName, id));
  }

  return (<Categories categories={categories} onClick={handleCategoryClick} />);
}
