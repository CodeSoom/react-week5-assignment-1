import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Locations from './Locations';

import { updateSelectedLocation } from './actions';

export default function LocationsContainer() {
  const dispatch = useDispatch();

  const { selectedLocatioNname, locations } = useSelector((state) => ({
    selectedLocatioNname: state.selectedLocatioNname,
    locations: state.locations,
  }));

  function handleClickLocation(locationName) {
    dispatch(updateSelectedLocation(locationName));
  }

  return (
    <Locations
      locations={locations}
      onCick={handleClickLocation}
      value={selectedLocatioNname}
    />
  );
}
