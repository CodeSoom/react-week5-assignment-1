import React from 'react';

import Regions from './Regions';
import CategoriesContainer from './CategoriesContainer';
import Restaurants from './Restaurants';

export default function App() {
  return (
    <div>
      <Regions />
      <CategoriesContainer />
      <Restaurants />
    </div>
  );
}
