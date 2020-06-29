import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRegions } from './actions';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions({ regions }));
  }, []);

  return (
    <>
      <RegionsContainer />
    </>
  );
}
