import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion, loadRestaurants } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const {
    regions,
    selectedRegion,
    selectedCategory,
  } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
    selectedCategory: state.selectedCategory,
  }));

  function handleClick(event) {
    const { target: { id } } = event;

    dispatch(selectRegion(Number(id)));
    dispatch(loadRestaurants({
      regionName: regions.find((region) => region.id === Number(id)).name,
      categoryId: selectedCategory.id,
    }));
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
      selectedRegion={selectedRegion}
    />
  );
}
