import React, { useState } from 'react';

import Locations from './Locations';
import Categories from './Categories';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';

export default function App() {
  const [state, setState] = useState({
    selectedlocationname: '',
  });

  const { selectedlocationname } = state;

  function handleClickLocation(event) {
    setState({
      ...state,
      selectedlocationname: event.target.value,
    });
  }

  function handleClick() {
    return 0;
  }

  return (
    <div>
      <Locations
        locations={locations}
        onClick={handleClickLocation}
        selectedlocationname={selectedlocationname}
      />
      <Categories categories={categories} onClick={handleClick} />
    </div>
  );
}
