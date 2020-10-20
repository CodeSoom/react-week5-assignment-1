import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { setRegions } from './actions';

function loadRegions({ dispatch }) {
  const regions = [];

  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions({ dispatch });
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RegionsContainer />
    </div>
  );
}
