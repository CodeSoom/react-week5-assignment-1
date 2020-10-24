import React from 'react';

import Regions from './Regions';

import Restaurants from './Restaurants';

export default function App() {
  return (
    <div>
      <Regions />
      <ul>
        <li><button type="button">한식</button></li>
        <li><button type="button">중식</button></li>
        <li><button type="button">일식</button></li>
        <li><button type="button">양식</button></li>
        <li><button type="button">분식</button></li>
      </ul>
      <Restaurants />
    </div>
  );
}
