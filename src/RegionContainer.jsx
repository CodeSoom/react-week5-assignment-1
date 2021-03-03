import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { get } from './utils';

import { setSelectedRegion } from './actions';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));

  const handleRegionClick = (name) => {
    dispatch(setSelectedRegion(name));
  };
  return (
    <>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button type="button" onClick={() => handleRegionClick(region.name)}>
              {region.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
