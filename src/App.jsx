import React, { useEffect } from 'react';

import {
  loadInitialData,
} from './actions';

function RegionsContainer () {
  return null;
}

function CategoriesContainer () {
  return null;
}

function RestaurantsContainer () {
  return null;
}

export default function App() {
  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
    <RegionsContainer />
    <CategoriesContainer />
    <RestaurantsContainer />
    </div>
  );
}