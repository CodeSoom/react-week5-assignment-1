import React from 'react';

export default function RestaurantRegions({ regions, onClickRegion }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id} onClick={() => onClickRegion(id)}>
          {name}
        </li>
      ))}
    </ul>
  );
}
