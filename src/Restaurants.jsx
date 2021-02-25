import React from 'react';

export default function Restaurants({ restaurants }) {
  if (restaurants[0] === undefined) {
    return (<span />);
  }
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
}
