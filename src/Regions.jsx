import React from 'react';

export default function Regions({ regions, selectedRegion, onSelectRegion }) {
  return (
    <div>
      {regions.map((region) => (
        <button
          key={region.id}
          onClick={() => onSelectRegion(region.name)}
          type="button"
        >
          {region.name === selectedRegion ? `${region.name}(V)` : region.name}
        </button>
      ))}
    </div>
  );
}
