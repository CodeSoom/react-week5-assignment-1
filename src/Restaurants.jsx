import React from 'react';

export default function Restaurants({ restaurants }) {
  // console.log(restaurants);
  if (restaurants.length === 0) {
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
