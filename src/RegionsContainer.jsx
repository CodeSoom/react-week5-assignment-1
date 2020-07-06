import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectedRegion } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectRegion } = useSelector((state) => ({
    regions: state.regions,
    selectRegion: state.selectRegion,
  }));
  const handleClick = (regionId) => {
    dispatch(selectedRegion(regionId));
  };

  return (
    <ul>
      {regions && regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
            {selectRegion && (region.id === selectRegion.id ? '(V)' : null)}
          </button>
        </li>
      ))}
    </ul>
  );
}
