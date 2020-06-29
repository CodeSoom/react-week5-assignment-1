import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  // TODO: DELETE
  const { selectedRegion } = useSelector((state) => state);

  return (
    <>
      <p>{selectedRegion}</p>
      <RegionContainer />

      <div>
        <button type="button">한식</button>
        <button type="button">중식</button>
        <button type="button">일식</button>
      </div>
    </>
  );
}
