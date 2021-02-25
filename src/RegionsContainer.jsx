import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { getRegionsThunk, selectRegion } from './actions';

function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.regions);

  useEffect(() => {
    dispatch(getRegionsThunk());
  }, []);

  function handleClick(region) {
    dispatch(selectRegion(region.name));
  }
  return (
    <div>
      <List list={regions} onClick={handleClick} />
    </div>
  );
}

export default RegionsContainer;
