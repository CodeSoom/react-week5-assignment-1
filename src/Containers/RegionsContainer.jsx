import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from '../Components/Regions';

import { loadRegions } from '../actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions);

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <Regions regions={regions} />
  );
}
