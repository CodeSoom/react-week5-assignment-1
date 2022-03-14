import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRegions, setSelectedItem } from '../actions/restaurant';
import ItemButtons from './ItemButtons';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selected } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  const handleClick = ({ name }) => {
    dispatch(setSelectedItem({ regionName: name }));
  };

  return (
    <>
      <ItemButtons items={regions} onClick={handleClick} selected={selected.regionName} />
    </>
  );
}
