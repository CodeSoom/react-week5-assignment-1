import React from 'react';

import Regions from './Regions';

export default function RestaurantRegionContainer() {
  const regions = [];

  function handleClick() {
    return null;
  }

  return (
    <div>
      <h2>Restaurant Regions</h2>
      <Regions
        regions={regions}
        onClick={handleClick}
      />
    </div>
  );
}
