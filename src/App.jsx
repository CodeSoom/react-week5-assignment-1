import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoryContainer from './CategoryContainer';
import RegionContainer from './RegionContainer';

import {
  loadInitialData,
} from './actions';

function RestaurantsContainer() {
  return null;
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <CategoryContainer />
      <RegionContainer />
      <RestaurantsContainer />
    </div>
  );
}
