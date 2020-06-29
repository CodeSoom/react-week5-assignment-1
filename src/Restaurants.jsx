import React from 'react';

export default function Restaurants({ restaurants }) {
  return (
    <>
      <div>
        {restaurants.map((restaurant) => (
          <p key={restaurant.id}>{restaurant.name}</p>
        ))}
      </div>
    </>
  );
}
