import React from 'react';

import RestaurantDisplayContainer from './containers/RestaurantDisplayContainer';
import RestaurantInputContainer from './containers/RestaurantInputContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantDisplayContainer />
      <RestaurantInputContainer />
    </div>
  );
}
