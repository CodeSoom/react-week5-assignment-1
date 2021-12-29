import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories, setSelectedItem } from '../actions/restaurant';
import ItemButtons from './ItemButtons';

export default function RestaurantCategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selected } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const handleClick = ({ id }) => {
    dispatch(setSelectedItem({ categoryId: id }));
  };

  return (
    <>
      <ItemButtons items={categories} onClick={handleClick} selected={selected.categoryId} />
    </>
  );
}
