import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { loadRegions } from './action';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <div>
      <RegionsContainer />
    </div>
  );
}
