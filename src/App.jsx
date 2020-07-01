import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { fetchRegions } from './services/api';

import {
  setRegions,
} from './actions';

async function loadRestaurantRegions({ dispatch }) {
  const regions = await fetchRegions();
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
