import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRegion, loadRestaurants } from './actions';
import { get } from './utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  // 리팩토링 전 방식 (utill 추가전)
  // const { regions, selectedRegion } = useSelector((state) => ({
  //   regions: state.regions,
  //   selectedRegion: state.selectedRegion,
  // }));

  function handleclick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
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
