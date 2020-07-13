import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import {
  changeCategoryId,
} from '../redux/action';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => ({
    categoryId: state.categoryId,
    categories: state.categories,
  }));

  const handleClick = ({ id }) => {
    dispatch(changeCategoryId(id));
  };

  return (
    <div>
      <Categories categories={categories} categoryId={categoryId} onClick={handleClick} />
    </div>
  );
}
