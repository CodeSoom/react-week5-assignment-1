import React from 'react';

import Regions from './Regions';
import Categories from './Categories';
import Restaurants from './Restaurants';

export default function App() {
  function handleClick() {

  }
  return (
    <div>
      <Regions
        onClick={handleClick}
      />
      <Categories />
      <Restaurants />
    </div>
  );
}
