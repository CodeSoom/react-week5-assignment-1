import React from 'react';
import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <div>
      <ul>
        {restaurants && restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <p>
              {restaurant.name}
              {/* {selectedRestaurant ? (
                <>{restaurant.id === selectedRestaurant.id ? '(V)' : null}</>
              ) : null} */}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
