import React from 'react';
import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RegionsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <div>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
