import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import { setRestaurants } from './actions';

function loadRestaurants({ dispatch }) {
  const restaurants = [];

  dispatch(setRestaurants({ restaurants }));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRestaurants({ dispatch });
  }, []);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
