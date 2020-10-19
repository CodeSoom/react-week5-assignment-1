import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurantRegion } from './actions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRestaurantRegion());
  }, []);

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          {region.name}
        </li>
      ))}
    </ul>
  );
}
