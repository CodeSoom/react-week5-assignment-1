import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RegionContainer from './RegionContainer';

import { setRegions } from './actions';

import { fetchRegions } from './services/api';

async function loadRegions({ dispatch }) {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    loadRegions({ dispatch });
  }, []);
  return (
    <>
      <RegionContainer />
    </>
  );
}
