import React from 'react';

export default function Region({ regions, selectedRegion, onClick }) {
  return (
    <>
      <div>
        {regions.map((region) => (
          <button
            type="button"
            key={region.id}
            onClick={() => onClick(region.name)}
          >
            {region.name}
            {selectedRegion === region.name && '(V)'}
          </button>
        ))}
      </div>
    </>
  );
}
