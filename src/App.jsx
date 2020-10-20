import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { fetchRegions } from './services/api';

import { setRegions } from './actions';

function loadRegions({ dispatch }) {
  const regions = fetchRegions();

  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions({ dispatch });
  }, []);

  return (
    <RegionsContainer />
  );
}
