import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateRegions, getRegions, getRestaurants,
} from './actions';

import ButtonList from './ButtonList';

export default function RegionButtonListContainer() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const handleClickRegion = (id) => {
    dispatch(updateRegions(id));
    dispatch(getRestaurants());
  };

  useEffect(() => {
    dispatch(getRegions());
  }, []);

  return (
    <ButtonList
      elements={regions}
      onClick={handleClickRegion}
    />
  );
}
