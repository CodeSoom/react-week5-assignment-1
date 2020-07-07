import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonList from '../components/ButtonList';
import { loadRegions, setSelectedRegionId } from '../actions';

export default function RestaurantRegionContainer() {
  const { regions, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.selectedRegionId,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

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
