import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  loadRestaurantRegions,
  loadRestaurnats,
  setRestaurantRegion,
} from './actions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegion } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRestaurantRegions());
  }, []);

  const handleClick = (region) => {
    dispatch(setRestaurantRegion(region));
    dispatch(loadRestaurnats());
  };

  return (
    <ul>
      {regions.map((region) => {
        const { id, name } = region;

        return (
          <li key={id}>
            <button
              type="button"
              name={name}
              onClick={() => handleClick(region)}
            >
              {name}
              {id === selectedRegion.id && '(V)'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
