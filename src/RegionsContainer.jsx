import React, { useState } from 'react';

export default function RegionsContainer() {
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
