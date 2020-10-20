import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { loadRegions } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RegionsContainer />
      <button type="button">한식</button>
      <button type="button">중식</button>
    </div>
  );
}
