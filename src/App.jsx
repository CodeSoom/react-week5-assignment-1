import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadInitialData } from './actions';

import RegionsContainer from './RegionsContainer';

function CatetoriesContainer() {
  return null;
}
function RestaurantsContainer() {
  return null;
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CatetoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
