import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonList from '../components/ButtonList';
import { loadCategories, setCurrentCategoryId } from '../actions';

export default function RestaurantCategoryButtonContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  function handleClickCategory(categoryId) {
    dispatch(setCurrentCategoryId(categoryId));
  }

  return (
    <ButtonList
      items={categories}
      handleClickButton={handleClickCategory}
    />
  );
}
