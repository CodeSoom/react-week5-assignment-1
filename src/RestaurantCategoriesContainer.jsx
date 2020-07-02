import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCategories from './RestaurantCategories';

import { changeCategory } from './actions';

export default function RestaurantCategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((selector) => ({
    categories: selector.categories,
  }));

  function handleClick(event) {
    dispatch(changeCategory({ name: event.target.dataset.name }));
    // TODO 비동기로 데이터 불러오기
  }

  return (
    <>
      <RestaurantCategories categories={categories} onClick={handleClick} />
    </>
  );
}
