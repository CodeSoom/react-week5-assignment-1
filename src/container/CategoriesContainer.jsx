import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Buttons from '../components/Buttons';
import { selectCategory, loadRestaurants } from '../modules/actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selected } = useSelector((state) => ({
    categories: state.categories,
    selected: state.selected.category,
  }));

  function handleClickCategories(category) {
    dispatch(selectCategory(category));
    dispatch(loadRestaurants());
  }

  return (
    <Buttons
      items={categories}
      selected={selected}
      onClick={handleClickCategories}
    />
  );
}
