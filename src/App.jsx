import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { fetchRegions } from './services/api';

import {
  setRegions
} from './actions';

async function loadRegions({ dispatch }) {
  const regions= await fetchRegions();
  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions({ dispatch });
  }, []);
  
  return (
    <div>
      <RegionsContainer />
    </div>
  );
}
