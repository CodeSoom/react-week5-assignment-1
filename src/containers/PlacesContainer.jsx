import React from 'react';

import { useSelector } from 'react-redux';

import Places from '../components/Places';

export default function PlacesContainer() {
  const { places } = useSelector((state) => ({
    places: state.places,
  }));

  return (
    <Places places={places} />
  );
}
