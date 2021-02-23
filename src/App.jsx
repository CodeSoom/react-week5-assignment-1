import React, { useState } from 'react';

import Categories from './Categories';

import categories from '../fixtures/categories';

import LocationsContainer from './LocationsContainer';

export default function App() {
  const [state, setState] = useState({
    selectedlocationname: '',
    selectedcategoryname: '',
  });

  const { selectedcategoryname } = state;

  function handleClickCategory(event) {
    setState({
      ...state,
      selectedlocationname: event.target.value,
    });
  }

  return (
    <div>
      <LocationsContainer />
      <Categories
        categories={categories}
        onClick={handleClickCategory}
        selectedcategoryname={selectedcategoryname}
      />
    </div>
  );
}
