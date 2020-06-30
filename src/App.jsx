import React from 'react';

import { regions } from '../__fixture__/data';

export default function App() {
  return (
    <div>
      {regions.map((region) => (
        <button key={region} type="button">
          {region}
        </button>
      ))}
    </div>
  );
}
