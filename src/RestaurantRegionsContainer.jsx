import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  loadRestaurantRegions,
  setRestaurantRegion,
} from './actions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state);

  const handleClick = (region) => {
    dispatch(setRestaurantRegion(region));
  };

  useEffect(() => {
    dispatch(loadRestaurantRegions());
  }, []);

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            name={region.name}
            onClick={() => handleClick(region)}
          >
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
