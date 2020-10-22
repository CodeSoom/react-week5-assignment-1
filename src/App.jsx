import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { setRegions } from './actions';

function loadRegions({ dispatch }) {
  const regions = [];
  // TODO: fetch GET /regions /regions/{id}
  // REST - CRUD => Read - collection / member, element
  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions({ dispatch });
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <RegionsContainer />
    </div>
  );
}
