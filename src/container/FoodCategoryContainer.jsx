import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FoodLocationList from '../components/FoodLocationList';
import {
  updateFoodCategory,
} from '../modules/actions';

export default function FoodCategoryContainer() {
  const { foodCategories } = useSelector((state) => ({
    foodCategories: state.foodCategories,
  }));

  const dispatch = useDispatch();

  function handleClick(value) {
    dispatch(updateFoodCategory(value));
  }

  return (
    <ul>
      <FoodLocationList
        items={foodCategories}
        onClick={handleClick}
      />
    </ul>
  );
}
