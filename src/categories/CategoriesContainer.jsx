import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/reducer';
import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.categoryId,
  }));

  const handleClick = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <div>
      <h1>카테고리</h1>
      <Categories categories={categories} handleClick={handleClick} categoryId={categoryId} />
    </div>
  );
}
