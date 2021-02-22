import React from 'react';

import restaurants from '../fixtures/restaurants';

import Restaurants from './Restaurants';

export default function App() {
  return (
    <div>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
