import React from 'react';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import Restaurants from './Restaurants';

export default function App() {
  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <Restaurants />
    </div>
  );
}
