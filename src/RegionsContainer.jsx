import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { getRegionsThunk } from './actions';

function RegionsContainer() {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions);
  useEffect(() => {
    dispatch(getRegionsThunk());
  }, []);
  return (
    <div className="regions-container">
      <List list={regions} />
    </div>
  );
}

export default RegionsContainer;
