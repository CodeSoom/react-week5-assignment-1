import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import loadRegions from './actions';

import RegionListContainer from './RegionListContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch()
    // dispatch(loadRegions());
  }, [])

  return (
    <>
      <RegionListContainer />
    </>
  );
}
