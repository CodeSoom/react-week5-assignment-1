import React from 'react';

import Regions from './Regions';

export default function App() {
  return (
    <div>
      <Regions />
      <ul>
        <li>
          <button type="button" name="category">
            한식
          </button>
        </li>
        <li>
          <button type="button" name="category">
            중식
          </button>
        </li>
        <li>
          <button type="button" name="category">
            일식
          </button>
        </li>
        <li>
          <button type="button" name="category">
            양식
          </button>
        </li>
        <li>
          <button type="button" name="category">
            분식
          </button>
        </li>
      </ul>
    </div>
  );
}
