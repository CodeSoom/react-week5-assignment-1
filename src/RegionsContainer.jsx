import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import {
  changeRegion,
  loadRestaurants,
} from '../redux/actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegion } = useSelector((state) => ({
    selectedRegion: state.selectedRegion,
    regions: state.regions,
  }));

  const handleClick = (id) => {
    dispatch(changeRegion(id));
    dispatch(loadRestaurants());
  };

  return (
    <div>
      <Regions regions={regions} selectedRegion={selectedRegion} onClick={handleClick} />
    </div>
  );
}
