import React from 'react';

import RegionItem from './RegionItem';

export default function Regions({ regions, selectedRegionId, onClickSelectRegion }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <RegionItem
          key={id}
          regionName={name}
          isSelected={id === selectedRegionId}
          onClick={() => onClickSelectRegion(id)}
        />
      ))}
    </ul>
  );
}
