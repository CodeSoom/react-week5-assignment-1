import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Locations from './Locations';

import locations from '../fixtures/locations';

import updateSelectedLocation from './actions';

export default function LocationsContainer() {
  const dispatch = useDispatch();

  const { selectedlocationname } = useSelector((state) => ({
    selectedlocationname: state.selectedlocationname,
  }));

  function handleClickLocation(event) {
    const locationName = event.target.value;
    dispatch(updateSelectedLocation(locationName));
  }

  return (
    <Locations
      locations={locations}
      onCick={handleClickLocation}
      selectedlocationname={selectedlocationname}
    />
  );
}
