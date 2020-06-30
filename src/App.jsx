import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRegions } from './actions';

import { fetchRegions } from './services/api';

import RegionsContainer from './RegionsContainer';

function loadRegions(dispatch) {
  const regions = fetchRegions();
  dispatch(setRegions({ regions }));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions(dispatch);
  }, []);

  return (
    <>
      <RegionsContainer />
    </>
  );
}
