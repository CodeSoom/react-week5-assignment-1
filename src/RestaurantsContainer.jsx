import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRestaurantsThunk } from './actions';
import Restaurants from './Restaurants';

function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { watching, restaurants } = useSelector((state) => ({
    restaurants: state.restaurants, watching: state.watching,
  }));

  const { regionName, categoryId } = watching;

  useEffect(() => {
    if (regionName && categoryId) {
      dispatch(getRestaurantsThunk());
    }
  }, [regionName && categoryId]);

  return (
    <div>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;
