import React, { useState } from 'react';

import { regions } from '../__fixture__/data';

export default function App() {

  const [selectRegion, setSelectRegion] = useState('');

  function handleSelectRegion(newSelectRegion) {
    setSelectRegion(newSelectRegion);
  }

  return (
    <div>
      {regions.map((region) => {

        if (region === selectRegion) {
          return (
            <button key={region} onClick={() => handleSelectRegion(region)} type="button">
              {`${region}(V)`}
            </button>
          );
        }
        return (
          <button key={region} onClick={() => handleSelectRegion(region)} type="button">
            {region}
          </button>
        );
      })}
    </div>
  );
}
