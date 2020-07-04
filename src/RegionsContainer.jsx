import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion, loadRestaurants, loadRestaurants2 } from './action';

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

    // if (selectedCategory !== '') {
    //   const category = categories.find(
    //     (item) => item.name === selectedCategory,
    //   );

    //   dispatch(loadRestaurants(region, category.id));
    //   // dispatch(loadRestaurants2());
    // }
    dispatch(loadRestaurants2());
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onSelectRegion={handleSelectRegion}
    />
  );
}
