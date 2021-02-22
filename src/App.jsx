import React from 'react';

import Locations from './Locations';
import Categories from './Categories';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';

export default function App() {
  return (
    <div>
      <Locations locations={locations} />
      <Categories categories={categories} />
    </div>
  );
}
