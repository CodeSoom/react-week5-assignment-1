import React from 'react';

import Locations from './Locations';

export default function LocationsContainer({ locations, onClick, selectedlocationname }) {
  return (
    <Locations
      locations={locations}
      onCick={onClick}
      selectedlocationname={selectedlocationname}
    />
  );
}
