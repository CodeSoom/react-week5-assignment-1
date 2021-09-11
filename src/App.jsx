import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from './modules/actions';

function RegionsContainer() {
  return null;
}

function CategoriesContainer() {
  return null;
}

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
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}