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
    </div>
  );
}
