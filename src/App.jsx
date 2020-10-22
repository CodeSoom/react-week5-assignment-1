import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionContainer from './container-component/RegionContainer';

import {
  loadRegions,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <div>
      <RegionContainer />
    </div>
  );
}
