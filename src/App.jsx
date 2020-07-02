import React from 'react';
import CategoriesContainer from './Containers/CategoriesContainer';

export default function App() {
  return (
    <div>
      <header>
        <h1>Restaurants</h1>
      </header>
      <main>
        <CategoriesContainer />
      </main>
    </div>
  );
}
