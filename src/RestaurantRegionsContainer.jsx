import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurantRegion } from './actions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state);

  const handleClick = (event) => {
    dispatch({
      type: 'SET_REGION',
      payload: event.target.name,
    });
  };

  useEffect(() => {
    dispatch(loadRestaurantRegion());
  }, []);

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            name={region.name}
            onClick={handleClick}
          >
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
