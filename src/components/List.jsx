import React from 'react';

export default function List({ restaurants }) {
  return (
    <ol id="restaurant-list">
      {
        restaurants.map((e) => (
          <li key={e.id}>
            {e.name}
            |
            {e.category}
            |
            {e.address}
          </li>
        ))
      }
    </ol>
  );
}
