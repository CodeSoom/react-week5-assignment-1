import React from 'react';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RegionsContainer />
      <CategoriesContainer />
    </div>
  );
}