import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  setSelectedCatId,
  loadRestaurants,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const {
    categories,
    regions,
    selectedCatId,
    selectedRegionId,
  } = useSelector((state) => (
    {
      categories: state.categories,
      regions: state.regions,
      selectedCatId: state.selectedCatId,
      selectedRegionId: state.selectedRegionId,
    }
  ));
  function changeSelectedCatId(id) {
    dispatch(setSelectedCatId(id));
    const region = regions.find((v) => v.id === selectedRegionId);

    if (region) {
      dispatch(loadRestaurants(id, regions ?
        regions.find((v) => v.id === selectedRegionId).name : ''));
    }
  }

  return (
    <Categories
      categories={categories}
      selectedCatId={selectedCatId}
      onClick={changeSelectedCatId}
    />
  );
}
