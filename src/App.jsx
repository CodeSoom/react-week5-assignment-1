import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { setRegions } from './actions';

import { fetchRegions } from './services/api';

async function loadRegions({ dispatch }) {
  const regions = await fetchRegions();

  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());

    loadRegions({ dispatch });
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RegionsContainer />
    </div>
  );
}
