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
    if (selectedAddress && selectedCategory) {
      dispatch(loadRestaurants({
        addressName: selectedAddress,
        categoryId: categoryList.filter((category) => category.name === selectedCategory)[0].id,
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
