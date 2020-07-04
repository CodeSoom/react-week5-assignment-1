import React, { useEffect } from 'react';

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

  useEffect(() => {
    if (selectedRegion.name && selectedCategory.id) {
      dispatch(loadRestaurants({
        regionName: selectedRegion.name,
        categoryId: selectedCategory.id,
      }));
    }
  }, [selectedRegion]);

  function handleClick(event) {
    const { target: { id } } = event;
    dispatch(selectRegion(Number(id)));
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
      selectedRegion={selectedRegion}
    />
  );
}
