import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionContainer from './RegionContainer';

import {
  loadRegions,
} from './actions';

// async function loadRegions({ dispatch }) {
//   const regions = await fetchRegions();
//   dispatch(setRegions(regions));
// }

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    // loadRegions({ dispatch });
  }, []);

  return (
    <div>
      <RegionContainer />
    </div>
  );
}
