import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import {
  loadRegions,
} from './actions';

export default function App() {
  const { loading } = useSelector(((state) => ({
    loading: state.loading,
  })));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  if (loading) {
    return (
      <p>로딩중...</p>
    );
  }

  return (
    <RegionsContainer />
  );
}
