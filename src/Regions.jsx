import React from 'react';

export default function Regions({ regions, newSelectRegion, onSelectRegions }) {
  return (
    <div>
      {regions.map((region) => (
        <button
          key={region.id}
          onClick={() => onSelectRegions(region.name)}
          type="button"
        >
          {region.name === newSelectRegion ? `${region.name}(V)` : region.name}
        </button>
      ))}
    </div>
  );
}
