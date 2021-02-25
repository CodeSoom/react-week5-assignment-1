import React from 'react';

function RegionButton({ name, onClick, currentRegion }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick('서울')}
      >
        { currentRegion === { name } ? `${{ name }}V` : { name }}
      </button>
    </li>
  );
}

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
