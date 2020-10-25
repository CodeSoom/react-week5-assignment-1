import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Region from '../components/Region';

import { updateSelectedRegionName } from '../actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegionName } = useSelector((state) => {
    const { region } = state;
    return {
      regions: region.regions,
      selectedRegionName: region.selectedRegionName,
    };
  });

  function handleClick(regionName) {
    dispatch(updateSelectedRegionName(regionName));
  }

  function isSelected(regionName) {
    return regionName === selectedRegionName;
  }

  return (
    <ul>
      {regions.map((region) => (
        <Region
          key={region.id}
          isSelected={() => isSelected(region.name)}
          name={region.name}
          onClick={() => handleClick(region.name)}
        />
      ))}
    </ul>
  );
}
