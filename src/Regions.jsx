import React from 'react';

export default function Regions({ regions, newSelectRegion, onSelectRegion }) {
  return (
    <div>
      {regions.map((region) => (
        <button
          key={region.id}
          onClick={() => onSelectRegion(region.name)}
          type="button"
        >
          {region.name === newSelectRegion ? `${region.name}(V)` : region.name}
        </button>
      ))}
    </div>
  );
}
