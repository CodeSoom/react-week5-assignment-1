import React from 'react';

import Region from './Region';

export default function Regions({ regions, selectedRegion, onClick }) {
  return (
    <>
      <ul>
        {
          regions.map((region) => (
            <Region
              region={region}
              selectedRegion={selectedRegion}
              onClick={onClick}
              key={region.id}
            />
          ))
        }
      </ul>
    </>
  );
}
