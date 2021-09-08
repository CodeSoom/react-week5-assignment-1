import React from 'react';

export default function Places({ places }) {
  return (
    <ul>
      {places.map((place) => (
        <li key={place.id}>
          {place.name}
        </li>
      ))}
    </ul>
  );
}
