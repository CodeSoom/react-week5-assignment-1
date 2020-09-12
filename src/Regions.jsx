import React from 'react';

import Region from './Region';

export default function Regions({ regions, onClick, selectedRegion }) {
  return (
    <ul>
      {regions.map((region) => (
        <Region
          key={region.id}
          region={region}
          onClick={onClick}
          selectedRegion={selectedRegion}
        />
      ))}
    </ul>
  );
}
