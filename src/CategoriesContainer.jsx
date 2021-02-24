import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import categories from '../fixtures/categories';

import updateSelectedCategory from './actions';

export default function LocationsContainer() {
  const dispatch = useDispatch();

  const { selectedcategoryname } = useSelector((state) => ({
    selectedcategoryname: state.selectedcategoryname,
  }));

  function handleClickCategory(event) {
    const locationName = event.target.value;
    dispatch(updateSelectedCategory(locationName));
  }

  return (
    <Categories
      categories={categories}
      onCick={handleClickCategory}
      value={selectedcategoryname}
      selectedcategoryname={selectedcategoryname}
    />
  );
}
