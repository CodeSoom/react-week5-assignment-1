import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Locations from './Locations';

import { updateSelectedLocation } from './actions';

export default function LocationsContainer() {
  const dispatch = useDispatch();

  const { selectedlocationname, locations } = useSelector((state) => ({
    selectedlocationname: state.selectedlocationname,
    locations: state.locations,
  }));

  function handleClickLocation(event) {
    const locationName = event.target.value;
    dispatch(updateSelectedLocation(locationName));
  }

  return (
    <Locations
      locations={locations}
      onCick={handleClickLocation}
      value={selectedlocationname}
      selectedlocationname={selectedlocationname}
    />
  );
}
