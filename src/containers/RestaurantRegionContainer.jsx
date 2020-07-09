import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonList from '../components/ButtonList';
import { setSelectedRegionId } from '../actions';

export default function RestaurantRegionContainer() {
  const { regions, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.selectedRegionId,
  }));

  const dispatch = useDispatch();

  function handleClickRegion(categoryId) {
    dispatch(setSelectedRegionId(categoryId));
  }

  return (
    <ButtonList
      items={regions}
      selectedId={selectedRegionId}
      handleClickButton={handleClickRegion}
    />
  );
}
