import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadRegions } from './actions';

import RegionsContainer from './RegionsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch();
  }, []);

  return (
    <>
      <RegionsContainer />
    </>
  );
}
