import React from 'react';

export default function List({ restaurants }) {
  return (
    <ol>
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
