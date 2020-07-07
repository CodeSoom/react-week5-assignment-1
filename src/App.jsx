import React from 'react';

import RestaurantCategoryContainer from './containers/RestaurantCategoryContainer';
import RestaurantRegionContainer from './containers/RestaurantRegionContainer';
import RestaurantDisplayContainer from './containers/RestaurantDisplayContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantCategoryContainer />
      <RestaurantRegionContainer />
      <RestaurantDisplayContainer />
    </div>
  );
}
