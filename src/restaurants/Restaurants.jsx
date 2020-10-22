import React from 'react';

export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ name }) => (
        <li>
          {name}
        </li>
      ))}
    </ul>
  );
}
