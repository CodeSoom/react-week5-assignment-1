import React from 'react';

export default function Locations({ locations, onClick }) {
  return (
    <ul>
      {locations.map((location) => (
        <li key={location.id}>
          <button
            type="button"
            onClick={onClick}
          >
            {location.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
