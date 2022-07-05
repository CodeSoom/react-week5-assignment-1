import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRegions } from './actions-async';

import Regions from './Regions';

export default function App() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  if (isLoading) {
    return <div>로딩중입니다!</div>;
  }

  return (
    <div>
      <Regions />
    </div>
  );
}
