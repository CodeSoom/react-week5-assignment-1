import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryButtonList from '../components/CategoryButtonList';
import { loadCategories, setCurrentCategoryId } from '../stores/action/action-creators';

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
    <CategoryButtonList
      id="CategoryButtonList"
      categories={categories}
      handleClickCategory={handleClickCategory}
    />
  );
}
