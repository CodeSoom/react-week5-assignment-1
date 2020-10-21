import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { checkRegions, initializeCheckedRegions, setRegions } from './actions';

import Regions from './Regions';

import { fetchRegions } from './services/api';

async function loadRegions({ dispatch }) {
  const regions = await fetchRegions();
  // TODO : fetch data
  dispatch(setRegions(regions));
}

export default function RegionsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions({ dispatch });
  }, []);

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClick(id, isChecked) {
    dispatch(checkRegions({ id, isChecked }));

    dispatch(initializeCheckedRegions({ id }));
  }

  return (
    <Regions regions={regions} onClick={handleClick} />
  );
}
