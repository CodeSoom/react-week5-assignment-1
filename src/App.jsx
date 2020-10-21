import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import Loading from './Loading';

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
      <Loading />
    );
  }

  return (
    <RegionsContainer />
  );
}
