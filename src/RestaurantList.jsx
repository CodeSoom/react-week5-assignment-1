import React from 'react';

import Restaurant from './Restaurant';

const RestaurantList = ({ restaurants }) => {
  if (restaurants.length === 0) {
    return null;
  }

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <Restaurant
          key={id}
          name={name}
        />
      ))}
    </ul>
  );
};

export default RestaurantList;
