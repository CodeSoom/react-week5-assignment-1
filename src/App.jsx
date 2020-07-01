import React from 'react';

import RegionsContainer from './Containers/RegionsContainer';
import CategoriesContainer from './Containers/CategoriesContainer';
import RestaurantsContainer from './Containers/RestaurantsContainer';

export default function App() {
  return (
    <div>
      <header>
        <h1>Restaurants</h1>
      </header>
      <main>
        <RegionsContainer />
        <CategoriesContainer />
        <RestaurantsContainer />
      </main>
    </div>
  );
}
