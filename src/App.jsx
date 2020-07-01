import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { regions } from '../fixtures/restaurants';

import {
  setRegions,
} from './actions';

function loadRestaurantRegions({ dispatch }) {
  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRestaurantRegions({ dispatch });
  }, []);

  return (
    <>
      <RestaurantRegionsContainer />
    </>
  );
}
