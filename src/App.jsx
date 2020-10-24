import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from  '../fixtures/regions';

import {
  setRegions
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(regions));
  }, []);
  
  return (
    <div>
      <RegionsContainer />
    </div>
  );
}
