import React from 'react';

export default function Locations({ locations, onClick, selectedLocationName }) {
  return (
    <ul>
      {locations.map((location) => (
        <li key={location.id}>
          <button
            type="button"
            onClick={() => onClick(location.name)}
          >
            {location.name === selectedLocationName ? `${selectedLocationName}(V)` : location.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
