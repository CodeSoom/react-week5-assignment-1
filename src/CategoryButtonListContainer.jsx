import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateCategories, getCategories, getRestaurants,
} from './actions';

import ButtonList from './ButtonList';

export default function CategoryButtonListContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const handleClickCategory = (id) => {
    dispatch(updateCategories(id));
    dispatch(getRestaurants());
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <ButtonList
        elements={categories}
        onClick={handleClickCategory}
      />
    </>
  );
}
