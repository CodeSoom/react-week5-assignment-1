import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setRegion } from './actions';

import Region from './Region';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { region, regions } = useSelector((state) => ({
    regions: state.regions,
    region: state.region,
  }));

  function onClickRegion(regionItem) {
    dispatch(setRegion(regionItem));
  }

  return <Region regions={regions} region={region} onClickRegion={onClickRegion} />;
}
