import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion, loadRestaurants } from './actions';

export default function RegionsContainer() {
  const {
    regions, regionName, categoryId,
  } = useSelector((state) => ({
    regions: state.regions,
    regionName: state.regionName,
    categoryId: state.categoryId,
  }));

  const dispatch = useDispatch();

  function handleClick(name) {
    dispatch(selectRegion(name));

    if (categoryId) {
      dispatch(loadRestaurants({
        categoryId,
        regionName: name,
      }));
    }
  }

  return (
    <Regions
      regions={regions}
      regionName={regionName}
      onClick={handleClick}
    />
  );
}
