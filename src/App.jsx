import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import {
  setRegions,
} from './actions';

import regions from '../fixtures/regions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(regions));
  }, []);

  return (
    <RegionsContainer />
  );
}
