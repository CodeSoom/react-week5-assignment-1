import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion, loadRestaurants } from './action';

export default function RegionsContainer() {
  const {
    regions, selectedRegion, categories, selectedCategory,
  } = useSelector(
    (state) => ({
      regions: state.regions,
      selectedRegion: state.selectedRegion,
      categories: state.categories,
      selectedCategory: state.selectedCategory,
    }),
  );

  const dispatch = useDispatch();

  function handleSelectRegion(region) {
    dispatch(selectRegion(region));

    if (selectedCategory !== '') {
      const seletecdCategories = categories.filter(
        (category) => category.name === selectedCategory,
      );
      dispatch(loadRestaurants(region, seletecdCategories[0].id));
    }
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onSelectRegion={handleSelectRegion}
    />
  );
}
