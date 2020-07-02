import React from 'react';

export default function RestaurantRegions({ regions, onClick }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button" onClick={onClick}>{region.name}</button>
        </li>
      ))}
    </ul>
  );
}
