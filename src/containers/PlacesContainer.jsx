import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Places from '../components/Places';

import {
  clickPlace,
} from '../modules/actions';

export default function PlacesContainer() {
  const dispatch = useDispatch();

  const { places, clickedPlace } = useSelector((state) => ({
    places: state.places,
    clickedPlace: state.clickedPlace,
  }));

  function handleClickPlace(name) {
    dispatch(clickPlace(name));
  }

  return (
    <Places
      places={places}
      clickedPlace={clickedPlace}
      onClick={handleClickPlace}
    />
  );
}
