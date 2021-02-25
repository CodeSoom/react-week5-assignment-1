import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRestaurantsThunk } from './actions';
import Restaurants from './Restaurants';

function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { selected, restaurants } = useSelector((state) => ({
    restaurants: state.restaurants, selected: state.selected,
  }));

  const { regionName, categoryId } = selected;

  useEffect(() => {
    if (regionName && categoryId) {
      dispatch(getRestaurantsThunk({ regionName, categoryId }));
    }
  }, [regionName, categoryId]);

  return (
    <div>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;
