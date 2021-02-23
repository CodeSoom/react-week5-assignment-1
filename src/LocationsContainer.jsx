import React from 'react';

import { useDispatch, useSelector } from 'reat-redux';

import Locations from './Locations';

import locations from '../fixtures/locations';

export default function LocationsContainer() {
  const dispatch = useDispatch();
  const { selectedlocationname } = useSelector((state) => ({
    selectedlocationname: state.selectedlocationname,
  }));

  function handleClickLocation() {
    dispatch();
  }

  return (
    <Locations
      locations={locations}
      onCick={handleClickLocation}
      selectedlocationname={selectedlocationname}
    />
  );
}
