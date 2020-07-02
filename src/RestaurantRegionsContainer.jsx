import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantRegions from './RestaurantRegions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();

  const { region, regions } = useSelector((selector) => ({
    regions: selector.regions,
    region: selector.region,
  }));

  function handleClick(event) {
    // TODO dispatch
    console.log(event.target);
    // dispatch(changeRegion());
  }

  return (
    <>
      <RestaurantRegions regions={regions} onClick={handleClick} />
    </>
  );
}
