import React, { useState } from 'react';

import { useSelector } from 'react-redux';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

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