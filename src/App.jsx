import React, { useState } from 'react';

import { regions } from '../__fixture__/data';

export default function App() {
  const [selectRegion, setSelectRegion] = useState('');

  function handleSelectRegion(newSelectRegion) {
    setSelectRegion(newSelectRegion);
  }

  return (
    <div>
      {regions.map((region) => (
        <button key={region} onClick={() => handleSelectRegion(region)} type="button">
          {region === selectRegion ? `${region}(V)` : region}
        </button>
      ))}
    </div>
  );
}
