import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import {
  changeCategory,
  loadRestaurants,
} from '../redux/actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => ({
    selectedCategory: state.selectedCategory,
    categories: state.categories,
  }));

  const handleClick = (id) => {
    dispatch(changeCategory(id));
    dispatch(loadRestaurants());
  };

  return (
    <div>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onClick={handleClick}
      />
    </div>
  );
}
