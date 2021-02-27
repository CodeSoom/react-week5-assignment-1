import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Locations from '../components/Locations';

import { updateSelectedLocation } from '../actions';

export default function LocationsContainer() {
  const dispatch = useDispatch();

  const { selectedLocationName, locations } = useSelector((state) => ({
    selectedLocationName: state.selectedLocationName,
    locations: state.locations,
  }));

  function handleClickLocation(locationName) {
    dispatch(updateSelectedLocation(locationName));
  }

  return (
    <Locations
      locations={locations}
      onCick={handleClickLocation}
      value={selectedLocationName}
    />
  );
}
