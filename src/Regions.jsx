import React from 'react';

export default function Regions({ regions }) {
  function handleClick() {
    return {
    };
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={handleClick}
          >
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
