import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRegions } from './actions';

import RegionsContainer from './RegionsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions({ regions: [] }));
  }, []);

  return (
    <>
      <RegionsContainer />
    </>
  );
}
