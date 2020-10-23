import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { intializeSelectButtonsAsync } from './actions';

import RegionContainer from './RegionContainer';
import CategoryContainer from './CategoryContainer';
import ListContainer from './ListContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(intializeSelectButtonsAsync());
  }, []);

  return (
    <>
      <RegionContainer />
      <CategoryContainer />
      <ListContainer />
    </>
  );
}
