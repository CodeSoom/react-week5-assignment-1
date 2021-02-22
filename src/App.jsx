import React from 'react';

import Location from './Location';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';
import Categories from './Categories';

export default function App() {
  return (
    <div>
      <Location locations={locations} />
      <Categories categories={categories} />
    </div>
  );
}
