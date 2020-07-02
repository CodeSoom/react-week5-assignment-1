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
      <button type="button">한식</button>
      <button type="button">중식</button>
      <button type="button">일식</button>
      <button type="button">양식</button>
      <button type="button">분식</button>
    </div>
  );
}
