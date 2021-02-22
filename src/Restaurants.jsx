import React from 'react';

export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurnat) => (
        <li key={restaurnat.id}>{restaurnat.name}</li>
      ))}
    </ul>
  );
}
