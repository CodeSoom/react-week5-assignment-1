import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegionsContainer from './RegionsContainer';

import {
  setRegions,
} from './actions';
import { fetchRegions } from './services/api';

function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <div>
      <RegionsContainer />
    </div>
  );
}
