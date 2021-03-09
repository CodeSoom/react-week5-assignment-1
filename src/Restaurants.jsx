import React from 'react';

function Restaurants({ restaurants }) {
  if (!restaurants) {
    return <p>텅~</p>;
  }
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
}

export default Restaurants;
