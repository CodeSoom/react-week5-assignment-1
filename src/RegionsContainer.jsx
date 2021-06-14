import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleclick(regionId) {
    dispatch(selectRegion(regionId));
  }

  return (
    <div>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button
              type="button"
              onClick={() => {
                handleclick(region.id);
              }}
            >
              {region.name}
              {selectedRegion ? (
                <>
                  {region.id === selectedRegion.id ? '(V)' : null}
                </>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
