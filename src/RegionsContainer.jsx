import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateRegions, getRestaurants,
} from './actions';

import ButtonList from './ButtonList';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const handleClickRegion = (id) => {
    dispatch(updateRegions(id));
    dispatch(getRestaurants());
  };

  return (
    <ButtonList
      elements={regions}
      onClick={handleClickRegion}
    />
  );
}
