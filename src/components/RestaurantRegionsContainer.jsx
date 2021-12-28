import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRegions } from '../actions/restaurant';
import ItemButtons from './ItemButtons';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <ItemButtons items={regions} />
    </>
  );
}
