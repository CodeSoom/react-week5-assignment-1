import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RegionListContainer from './RegionListContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, [])

  return (
    <>
      <RegionListContainer />
    </>
  );
}
