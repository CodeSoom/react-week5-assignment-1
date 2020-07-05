import React from 'react';

import RestaurantCategoryButtonContainer from './containers/RestaurantCategoryButtonContainer';
import RestaurantDisplayContainer from './containers/RestaurantDisplayContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantCategoryButtonContainer />
      <RestaurantDisplayContainer />
    </div>
  );
}
