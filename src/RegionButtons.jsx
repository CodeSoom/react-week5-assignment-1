import React from 'react';

import RegionButton from './RegionButton';

export default function RegionButtons({ regions, onClick, currentRegion }) {
  return (
    <ul>
      { regions.map((region) => (
        <RegionButton
          key={region.id}
          name={region.name}
          onClick={onClick}
          currentRegion={currentRegion}
        />
      ))}
    </ul>
  );
}
