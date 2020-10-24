import React from 'react';

const restaurants = ['홍콩반점'];

export default function Restaurants() {
  return (
    <>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant}>
            {restaurant}
          </li>
        ))}
      </ul>
    </>
  );
}
