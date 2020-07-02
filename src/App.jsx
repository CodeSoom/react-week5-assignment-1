import React from 'react';
import CategoriesContainer from './Containers/CategoriesContainer';
import RegionsContainer from './Containers/RegionsContainer';

export default function App() {
  return (
    <div>
      <header>
        <h1>Restaurants</h1>
      </header>
      <main>
        <RegionsContainer />
        <CategoriesContainer />
      </main>
    </div>
  );
}
