import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { watchRegion, createThunk, GET_REGIONS } from './actions';
import { getRegions } from './services/api';

function RegionsContainer() {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions);
  useEffect(() => {
    dispatch(createThunk(GET_REGIONS, getRegions));
  }, []);

  function handleClick(region) {
    dispatch(watchRegion(region.name));
  }
  return (
    <div className="regions-container">
      <List list={regions} onClick={handleClick} />
    </div>
  );
}

export default RegionsContainer;
