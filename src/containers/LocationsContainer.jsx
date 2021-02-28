import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Locations from '../components/Locations';

import { updateSelectedLocation } from '../actions';

export default function LocationsContainer() {
  const dispatch = useDispatch();

  const { selectedLocation, locations } = useSelector((state) => ({
    selectedLocation: state.selectedLocation,
    locations: state.locations,
  }));

  function handleClickLocation(locationId) {
    const location = locations.find(({ id }) => id === locationId);
    return dispatch(updateSelectedLocation(location));
  }

  return (
    <Locations
      locations={locations}
      onClick={handleClickLocation}
      selectedId={selectedLocation.id}
    />
  );
}
