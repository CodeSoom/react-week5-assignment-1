import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { intializeSelectButtons } from './actions';

import ButtonsContainer from './ButtonsContainer';
import ListContainer from './ListContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(intializeSelectButtons());
  }, []);

  return (
    <>
      <ButtonsContainer type="location" />
      <ButtonsContainer type="foodType" />
      <ListContainer />
    </>
  );
}
