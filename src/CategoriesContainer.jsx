import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import {
  changeCategoryId,
  loadRestaurants,
} from '../redux/action';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => ({
    categoryId: state.categoryId,
    categories: state.categories,
  }));

  const handleClick = ({ id }) => {
    dispatch(changeCategoryId(id));
    dispatch(loadRestaurants());
  };

  return (
    <div>
      <Categories categories={categories} categoryId={categoryId} onClick={handleClick} />
    </div>
  );
}
