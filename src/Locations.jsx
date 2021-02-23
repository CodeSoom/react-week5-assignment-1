import React from 'react';

export default function Locations({ locations, onClick, selectedlocationname }) {
  return (
    <ul>
      {locations.map((location) => (
        <li key={location.id}>
          <button
            type="button"
            onClick={onClick}
            selectedlocationname={selectedlocationname}
          >
            {location.name === selectedlocationname ? `${selectedlocationname}(V)` : location.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
