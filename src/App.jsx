import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import {
  loadRegions,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <RestaurantRegionsContainer />
      <ul>
        <li>한식</li>
        <li>중식</li>
        <li>일식</li>
        <li>양식</li>
        <li>분식</li>
      </ul>
    </>
  );
}
