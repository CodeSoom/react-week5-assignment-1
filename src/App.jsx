import React from 'react';

import Locations from './Locations';
import Categories from './Categories';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';

export default function App() {
  function handleClick() {
    return 0;
  }

  return (
    <div>
      <Locations locations={locations} onClick={handleClick} />
      <Categories categories={categories} onClick={handleClick} />
    </div>
  );
}
