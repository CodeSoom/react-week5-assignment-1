import React from 'react';

import Restaurant from './Restaurant';

export default function Restaurants({ restaurants }) {
  return (
    <>
      <ul>
        {
          restaurants.map((restaurant) => (
            <Restaurant name={restaurant.name} key={restaurant.id} />
          ))
        }
      </ul>
    </>
  );
}
