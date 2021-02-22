import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RegionList from './RegionList';

export default function RegionListContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegionID } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionID: state.selectedRegionID,
  }));

  return (
    <RegionList
      regions={regions}
      selectedRegionID={selectedRegionID}
      onClick={() => dispatch({

      })}
    />
  );
}
