import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRegions } from './actions';

import RegionContainer from './RegionContainer';

function loadRegions({ dispatch }) {
  const regions = [];
  // TODO : load regions
  // 1. API server
  // 2. fetch
  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions({ dispatch });
  }, []);

  return (
    <div>
      <RegionContainer />
    </div>
  );
}
