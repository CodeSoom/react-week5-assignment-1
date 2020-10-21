import React from 'react';

export default function Regions({ regions, onClick }) {
  function handleClick(region) {
    onClick(region);
  }
  return (
    <>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button
              type="button"
              onClick={() => handleClick(region.name)}
            >
              {region.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
