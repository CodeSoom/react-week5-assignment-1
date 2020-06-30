import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRegions } from './actions';

import RegionsContainer from './RegionsContainer';

export default function App() {
  const dispatch = useDispatch();

  function loadRegions() {
    const regions = [];
    // TODO: fetch API
    dispatch(setRegions({ regions }));
  }

  useEffect(() => {
    loadRegions();
  }, []);

  return (
    <>
      <RegionsContainer />
    </>
  );
}
