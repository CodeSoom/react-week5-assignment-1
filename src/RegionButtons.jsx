import React from 'react';

import RegionButton from './RegionButton';

export default function RegionButtons({ regions, onClick, currentRegion }) {
  return (
    <ul>
      { regions.map((region, index) => (
        <RegionButton
          key={index.toString()}
          name={region}
          onClick={onClick}
          currentRegion={currentRegion}
        />
      ))}
    </ul>
  );
}
