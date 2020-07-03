import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryList from './CategoryList';

import { selectCategory, loadRestaurants } from './actions';

export default function CategoryListContainer() {
  const dispatch = useDispatch();

  const { categoryList, selectedAddress, selectedCategory } = useSelector((state) => ({
    categoryList: state.categoryList,
    selectedAddress: state.selectedAddress,
    selectedCategory: state.selectedCategory,
  }));

  useEffect(() => {
    if (selectedAddress.name && selectedCategory.id) {
      dispatch(loadRestaurants({
        addressName: selectedAddress.name,
        categoryId: selectedCategory.id,
      }));
    }
  }, [selectedCategory]);

  function handleClick(event) {
    const { target: { id } } = event;
    dispatch(selectCategory(Number(id)));
  }

  return (
    <CategoryList
      categoryList={categoryList}
      onClick={handleClick}
      selectedCategory={selectedCategory}
    />
  );
}
