import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  updateSelected,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { region } = useSelector((state) => ({
    region: state.selected.region,
  }));

  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
    { id: 4, name: '부산' },
    { id: 5, name: '광주' },
    { id: 6, name: '강원도' },
    { id: 7, name: '인천' },
  ];

  function handleClick(selectedRegion) {
    dispatch(updateSelected(selectedRegion));
  }

  return (
    <Regions
      selected={region}
      regions={regions}
      onClick={handleClick}
    />
  );
}
