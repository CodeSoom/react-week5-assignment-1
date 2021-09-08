import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import PlacesContainer from './containers/PlacesContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';

import {
  setPlaces,
} from './modules/actions';

import places from '../fixtures/places';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPlaces(places));
  }, []);

  return (
    <div>
      <h1>Location && Restaurants</h1>
      <PlacesContainer />
      <RestaurantsContainer />
    </div>
  );
}
