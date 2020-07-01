import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectRegion } from './action';

export default function RegionsContainer() {
  const { regions, newSelectRegion } = useSelector((state) => ({
    regions: state.regions,
    newSelectRegion: state.newSelectRegion,
  }));

  const dispatch = useDispatch();

  function handleSelectRegion(newRegion) {
    dispatch(selectRegion(newRegion));
  }

  return (
    <div>
      {regions.map((region) => (
        <button key={region.id} onClick={() => handleSelectRegion(region.name)} type="button">
          {region.name === newSelectRegion ? `${region.name}(V)` : region.name}
        </button>
      ))}
    </div>
  );
}