import React from 'react';

export default function RestaurantRegions({ regions, onClickRegion }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClickRegion(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
