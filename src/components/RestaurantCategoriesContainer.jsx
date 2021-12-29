import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../actions/restaurant';
import ItemButtons from './ItemButtons';

export default function RestaurantCategoriesContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <ItemButtons items={categories} />
    </>
  );
}
