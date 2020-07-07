import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonList from '../components/ButtonList';
import { loadCategories, setSelectedCategoryId } from '../actions';

export default function RestaurantCategoryContainer() {
  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.selectedCategoryId,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  function handleClickCategory(categoryId) {
    dispatch(setSelectedCategoryId(categoryId));
  }

  return (
    <ButtonList
      items={categories}
      selectedId={selectedCategoryId}
      handleClickButton={handleClickCategory}
    />
  );
}
