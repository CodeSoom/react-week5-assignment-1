import React from 'react';

export default function Restaurants({ restaurants = [] }) {
  if (restaurants.length === 0) {
    return '표시할 레스토랑이 없어요~';
  }

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
}
